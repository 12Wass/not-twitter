import { Request } from 'express';
import { Strategy } from 'passport-strategy';
import { SupabaseAuthUser } from './user.type';
import { SupabaseAuthStrategyOptions } from './option.interface';
export declare class SupabaseAuthStrategy extends Strategy {
    readonly name = "SUPABASE_AUTH";
    private supabase;
    private extractor;
    success: (user: any, info: any) => void;
    fail: Strategy['fail'];
    constructor(options: SupabaseAuthStrategyOptions);
    validate(payload: SupabaseAuthUser): Promise<SupabaseAuthUser>;
    authenticate(req: Request): void;
    private validateSupabaseResponse;
}
