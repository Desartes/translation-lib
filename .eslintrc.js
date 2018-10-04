module.exports = {
    "parser": "babel-eslint",
    "settings": {
        "flowtype": {
                "onlyFilesWithFlowAnnotation": true
        }
    },
    "extends": [
        "plugin:flowtype/recommended",
    ],
    "env": {
        "node": true,
        "browser": true,
        "es6": true,
    },
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true
        }
    },
    "plugins": [
        "flowtype",
    ],
    "rules": {
        "eol-last": "error",
        "max-statements": ["warn", 20],
        "arrow-body-style": ["warn", "as-needed"],
        "camelcase": "off",
        "no-tabs": "off",
        "max-len": ["error", { "code": 120, "tabWidth": 2 }],
        "indent": ["error", "tab", { "SwitchCase": 1, "MemberExpression": 1 }],
        "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
        "new-cap": ["error", { "capIsNew": false }],
        "no-duplicate-imports": "off",
        "no-plusplus": "off",
        "no-shadow": ["error", { "builtinGlobals": false, "hoist": "functions", "allow": ["describe"] }],
        "no-param-reassign": ["error", { "ignorePropertyModificationsFor": ["el", "ref", "event"] }],
        "object-curly-newline": ["error", {
            "ObjectExpression": { "minProperties": 6, "multiline": true, "consistent": true },
            "ObjectPattern": { "minProperties": 6, "multiline": true, "consistent": true }
        }],
        "import/prefer-default-export": "off",
        "import/no-extraneous-dependencies": "off",
        "flowtype/delimiter-dangle": ["error", "always-multiline"],
        "flowtype/semi": ["error", "always"]
    }
}
