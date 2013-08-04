/**
 * Created with JetBrains WebStorm.
 * User: schulze
 * Date: 8/4/13
 * Time: 4:56 PM
 * To change this template use File | Settings | File Templates.
 */
new Module();

var ModulesController = {
    modules: [],

    addModule: function (module) {
        ModulesController.modules.push(module);

        return this;
    },

    addTestModules: function () {
        var module_one = new Module();
        module_one.fill("CS1234", "Test Module 1", "TM1", "A", 4, 3.3);
        ModulesController.modules.push(module_one);

        return this;
    },

    setEditModule: function (index) {
        var module = ModulesController.modules[index];

        $("#numberInputEditModule").text(module.getNumber());
        $("#nameInputEditModule").text(module.getName());
        $("#shortNameInputEditModule").text(module.getNameShort());
        $("#typeInputEditModule").text(module.getType());
        $("#creditInputEditModule").text(module.getCreditPoints());
        $("#markInputEditModule").text(module.getMark());

        return this;
    }
};