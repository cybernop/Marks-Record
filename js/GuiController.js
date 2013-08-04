/**
 * Created with JetBrains WebStorm.
 * User: schulze
 * Date: 8/4/13
 * Time: 3:49 PM
 * To change this template use File | Settings | File Templates.
 */
viewController = {
    showRecords: function () {
        viewController.hideAll();
        $("#recordView").show();
        $("#navRecords").addClass("active");

        viewController.updateRecords();
    },

    updateRecords: function () {
        var tableBody = $("#recordViewTableBody"), moduleController = ModulesController();
        var i, row, module, modules;

        tableBody.empty();
        moduleController.addTestModules();
        modules = moduleController.getModules();

        for (i = 0; i < modules.length; i++) {
            module = modules[i];
            row = '<tr>';
            row += '<td>' + module.getNumber() + '</td>';
            row += '<td>' + module.getName() + '</td>';
            row += '<td>' + module.getType() + '</td>';
            row += '<td>' + module.getCreditPoints() + '</td>';
            row += '<td>' + module.getMark() + '</td>';

            tableBody.append(row);
        }
    },

    showModules: function () {
        viewController.hideAll();
        $("#coursesView").show();
        $("#navCourses").addClass("active");
    },

    hideAll: function () {
        $("#recordView").hide();
        $("#coursesView").hide();

        $("#navRecords").removeClass("active");
        $("#navCourses").removeClass("active");
    }


};

