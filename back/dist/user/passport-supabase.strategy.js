"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupabaseAuthStrategy = void 0;
const passport_strategy_1 = require("passport-strategy");
const supabase_js_1 = require("@supabase/supabase-js");
const constants_1 = require("./constants");
class SupabaseAuthStrategy extends passport_strategy_1.Strategy {
    constructor(options) {
        super();
        this.name = constants_1.SUPABASE_AUTH;
        if (!options.extractor) {
            throw new Error('\n Extractor is not a function. You should provide an extractor. \n Read the docs');
        }
        this.supabase = (0, supabase_js_1.createClient)(options.supabaseUrl, options.supabaseKey, (options.supabaseOptions = {}));
        this.extractor = options.extractor;
    }
    async validate(payload) {
        return payload;
    }
    authenticate(req) {
        const idToken = this.extractor(req);
        if (!idToken) {
            this.fail(constants_1.UNAUTHORIZED, 401);
            return;
        }
        this.supabase.auth.api
            .getUser(idToken)
            .then((res) => this.validateSupabaseResponse(res))
            .catch((err) => {
            this.fail(err.message, 401);
        });
    }
    async validateSupabaseResponse({ data }) {
        const result = await this.validate(data);
        if (result) {
            this.success(result, {});
            return;
        }
        this.fail(constants_1.UNAUTHORIZED, 401);
        return;
    }
}
exports.SupabaseAuthStrategy = SupabaseAuthStrategy;
//# sourceMappingURL=passport-supabase.strategy.js.map