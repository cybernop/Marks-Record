/**
 * Created with JetBrains WebStorm.
 * User: schulze
 * Date: 8/4/13
 * Time: 4:56 PM
 * To change this template use File | Settings | File Templates.
 */
new Module();

var ModulesController = function () {
    modules = [];

    return {
        addModule: function (module) {
            modules.push(module);

            return this;
        },

        addTestModules: function() {
            module_one = new Module();
            module_one.fill("CS1234", "Test Module 1", "TM1", "A", 4, 3.3);
            modules.push(module_one);

            return this;
        },

        getModules: function(){
            return modules;
        }
    }
}