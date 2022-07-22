import {Request} from 'express';
import {JwtFromRequestFunction} from 'passport-jwt';
import {Strategy} from 'passport-strategy';

import {createClient, SupabaseClient} from '@supabase/supabase-js';
import { SupabaseAuthUser } from './user.type';
import {SupabaseAuthStrategyOptions} from './option.interface';
import { UNAUTHORIZED, SUPABASE_AUTH } from "./constants";

export class SupabaseAuthStrategy extends Strategy {
    readonly name = SUPABASE_AUTH;
    private supabase: SupabaseClient;
    private extractor: JwtFromRequestFunction;
    success: (user: any, info: any) => void;
    fail: Strategy['fail'];

    constructor(options: SupabaseAuthStrategyOptions) {
        super();
        if (!options.extractor) {
            throw new Error(
                '\n Extractor is not a function. You should provide an extractor. \n Read the docs',
            );
        }

        this.supabase = createClient(
            options.supabaseUrl,
            options.supabaseKey,
            (options.supabaseOptions = {}),
        );
        this.extractor = options.extractor;
    }

    async validate(payload: SupabaseAuthUser): Promise<SupabaseAuthUser> {
        return payload;
    }

    authenticate(req: Request): void {
        const idToken = this.extractor(req);

        if (!idToken) {
            this.fail(UNAUTHORIZED, 401);
            return;
        }

        this.supabase.auth.api
            .getUser(idToken)
            .then((res) => this.validateSupabaseResponse(res))
            .catch((err) => {
                this.fail(err.message, 401);
            });
    }

    private async validateSupabaseResponse({ data }: any) {
        const result = await this.validate(data);
        if (result) {
            this.success(result, {});
            return;
        }
        this.fail(UNAUTHORIZED, 401);
        return;
    }
}
