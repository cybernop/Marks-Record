/**
 * Created with JetBrains WebStorm.
 * User: schulze
 * Date: 8/4/13
 * Time: 4:56 PM
 * To change this template use File | Settings | File Templates.
 */
var Module = function () {
    var number = '',
        name = '',
        name_short = '',
        type = '',
        credit = 0,
        mark = 0;

    return {
        fill: function (module_number, module_name, module_name_short, module_type, module_credit_points, module_mark) {
            if (module_number)
                number = module_number;
            if (module_name)
                name = module_name;
            if (module_name_short)
                name_short = module_name_short;
            if (module_type)
                type = module_type;
            if (module_credit_points)
                credit = module_credit_points;
            if (module_mark)
                mark = module_mark;
            return this;
        },
        getNumber: function () {
            return number;
        },
        getName: function () {
            return name;
        },
        getNameShort: function () {
            return name_short;
        },
        getType: function () {
            return type;
        },
        getCreditPoints: function () {
            return credit;
        },
        getMark: function () {
            return mark;
        }
    }
};