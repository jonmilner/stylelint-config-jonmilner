module.exports = {
  "rules": {
    "at-rule-blacklist": null,
    "at-rule-empty-line-before": ["always", {
      "except": ["blockless-group", "first-nested"],
      "ignore": ["after-comment"]
    }],
    "at-rule-name-case": "lower",
    "at-rule-name-newline-after": "always-multi-line",
    "at-rule-name-space-after": "always",
    "at-rule-no-unknown": [true, {
      "ignoreAtRules": ["define-mixin", "each", "for", "lost", "mixin"]
    }],
    "at-rule-no-vendor-prefix": true,
    "at-rule-semicolon-newline-after": "always",
    "at-rule-whitelist": null,
    "block-closing-brace-empty-line-before": "never",
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always-multi-line",
    "block-closing-brace-space-after": null,
    "block-closing-brace-space-before": "always-single-line",
    "block-no-empty": true,
    "block-no-single-line": null,
    "block-opening-brace-newline-after": "always-multi-line",
    "block-opening-brace-newline-before": null,
    "block-opening-brace-space-after": "always-single-line",
    "block-opening-brace-space-before": "always",
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-named": "never",
    "color-no-hex": null,
    "color-no-invalid-hex": true,
    "comment-empty-line-before": null,
    "comment-no-empty": true,
    "comment-whitespace-inside": null,
    "custom-media-pattern": null,
    "custom-property-empty-line-before": "never",
    "custom-property-no-outside-root": null,
    "custom-property-pattern": null,
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-properties-order": "alphabetical",
    "declaration-block-semicolon-newline-after": "always-multi-line",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-single-line-max-declarations": 1,
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-newline-after": null,
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never",
    "declaration-empty-line-before": "never",
    "declaration-no-important": null,
    "declaration-property-unit-blacklist": null,
    "declaration-property-unit-whitelist": null,
    "declaration-property-value-blacklist": null,
    "declaration-property-value-whitelist": null,
    "font-family-name-quotes": "always-unless-keyword",
    "font-weight-notation": "numeric",
    "function-blacklist": null,
    "function-calc-no-unspaced-operator": true,
    "function-comma-newline-after": "never-multi-line",
    "function-comma-newline-before": "never-multi-line",
    "function-comma-space-after": "always",
    "function-comma-space-before": "never",
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-parentheses-newline-inside": "never-multi-line",
    "function-parentheses-space-inside": "never",
    "function-url-no-scheme-relative": true,
    "function-url-quotes": "always",
    "function-whitelist": null,
    "function-whitespace-after": "always",
    "indentation": 2,
    "keyframe-declaration-no-important": true,
    "length-zero-no-unit": true,
    "max-empty-lines": 1,
    "max-line-length": null,
    "max-nesting-depth": [ 4, {
      "ignore": ["at-rules-without-declaration-blocks"]
    }],
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-case": "lower",
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-no-missing-punctuation": true,
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",
    "media-query-list-comma-newline-after": "always-multi-line",
    "media-query-list-comma-newline-before": "never-multi-line",
    "media-query-list-comma-space-after": "always-single-line",
    "media-query-list-comma-space-before": "never",
    "no-browser-hacks": null,
    "no-descending-specificity": null,
    "no-duplicate-selectors": null,
    "no-eol-whitespace": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "no-missing-end-of-source-newline": true,
    "no-unknown-animations": true,
    "no-unsupported-browser-features": [null, {
      "browsers": "> 1%, last 2 versions, ie >= 10"
    }],
    "number-leading-zero": "always",
    "number-max-precision": 3,
    "number-no-trailing-zeros": true,
    "property-blacklist": null,
    "property-no-unknown": [true, {
      "ignoreProperties": [
        "lost-utility",
        "lost-flex-container",
        "lost-center",
        "lost-align",
        "lost-column",
        "lost-row",
        "lost-waffle",
        "lost-offset",
        "lost-move",
        "lost-masonry-wrap",
        "lost-masonry-column",
        "-webkit-overflow-scrolling"
      ]
    }],
    "property-no-vendor-prefix": true,
    "property-whitelist": null,
    "rule-nested-empty-line-before": ["always-multi-line", {
      "except": ["first-nested"],
      "ignore": ["after-comment"]
    }],
    "root-no-standard-properties": null,
    "rule-non-nested-empty-line-before": ["always-multi-line", {
      "ignore": ["after-comment"]
    }],
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-blacklist": null,
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-operator-whitelist": null,
    "selector-attribute-quotes": "always",
    "selector-class-pattern": null,
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-id-pattern": "always",
    "selector-list-comma-newline-after": "always-multi-line",
    "selector-list-comma-newline-before": "never-multi-line",
    "selector-list-comma-space-after": "always-single-line",
    "selector-list-comma-space-before": "never",
    "selector-max-compound-selectors": 3,
    "selector-max-empty-lines": 0,
    "selector-max-specificity": "0,4,1",
    "selector-no-attribute": null,
    "selector-no-combinator": null,
    "selector-no-id": true,
    "selector-no-type": null,
    "selector-no-universal": null,
    "selector-no-vendor-prefix": true,
    "selector-pseudo-class-blacklist": null,
    "selector-pseudo-class-no-unknown": [true, {
      ignorePseudoClasses: ["container"]
    }],
    "selector-pseudo-class-whitelist": null,
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-element-no-unknown": [true, {
      ignorePseudoElements: ["ms-expand"]
    }],
    "selector-root-no-composition": true,
    "selector-type-case": "lower",
    "selector-type-no-unknown": null,
    "string-no-newline": true,
    "string-quotes": "double",
    "time-no-imperceptible": true,
    "unit-blacklist": null,
    "unit-whitelist": null,
    "value-list-comma-newline-after": "always-multi-line",
    "value-list-comma-newline-before": "never-multi-line",
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-space-before": "never",
    "value-no-vendor-prefix": true
  }
}
