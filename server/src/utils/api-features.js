"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ApiFeatures = /** @class */ (function () {
    function ApiFeatures(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }
    ApiFeatures.prototype.filter = function () {
        var queryObj = {};
        // const excludedFields = ["page", "sort", "limit", "fields"];
        // excludedFields.forEach((el) => delete queryObj[el]);
        if (this.queryString.content)
            queryObj = __assign(__assign({}, queryObj), { name: {
                    $regex: this.queryString.content,
                    $options: "i",
                } });
        if (this.queryString.category)
            queryObj = __assign(__assign({}, queryObj), { category: {
                    $regex: this.queryString.category,
                    $options: "i",
                } });
        if (this.queryString.tags)
            queryObj = __assign(__assign({}, queryObj), { tags: {
                    $in: this.queryString.tags.split(","),
                } });
        if (this.queryString.priorities)
            queryObj = __assign(__assign({}, queryObj), { priority: {
                    $in: this.queryString.priorities.split(","),
                } });
        if (this.queryString.completed)
            queryObj = __assign(__assign({}, queryObj), { completed: this.queryString.completed });
        this.query.find(queryObj);
        return this;
    };
    ApiFeatures.prototype.sort = function () {
        if (this.queryString.sort)
            this.query = this.query.sort(this.queryString.sort.split(",").join(" "));
        else
            this.query = this.query.sort("-createdAt");
        return this;
    };
    ApiFeatures.prototype.limitFields = function () {
        if (this.queryString.fields)
            this.query = this.query.select(this.queryString.fields.split(",").join(" "));
        else
            this.query = this.query.select("-__v");
        return this;
    };
    ApiFeatures.prototype.paginate = function () {
        if (this.queryString.page && this.queryString.limit) {
            var page = +this.queryString.page || 1;
            var limit = +this.queryString.limit || 100;
            var skip = (page - 1) * limit;
            // page=2 1-10 page 1, 11-20 page 2
            this.query = this.query.skip(skip).limit(limit);
        }
        return this;
    };
    return ApiFeatures;
}());
exports.default = ApiFeatures;
