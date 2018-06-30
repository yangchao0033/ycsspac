var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+auto switch", {
    "+auto switch": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)ytimg\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)youtube\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)googlevideo\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)ggpht\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)googleusercontent\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)nr-data\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)servedby-buysellads\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)carbonads\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)segment\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)ajax\.googleapis\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)honeybadger\.io$/.test(host)) return "+proxy";
        if (/(?:^|\.)google\.com$/.test(host)) return "+proxy";
        if (/^internal\.example\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)example\.com$/.test(host)) return "+proxy";
        return "+__ruleListOf_auto switch";
    },
    "+__ruleListOf_auto switch": "DIRECT",
    "+proxy": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "PROXY 127.0.0.1:1087";
    }
});
