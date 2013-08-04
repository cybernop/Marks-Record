/**
 * Created with JetBrains WebStorm.
 * User: schulze
 * Date: 8/4/13
 * Time: 3:49 PM
 * To change this template use File | Settings | File Templates.
 */
viewController = {
    init: function(){
        ModulesController.addTestModules();
        viewController.show_records();
    },

    show_records: function () {
        viewController.hideAll();
        $("#recordView").show();
        $("#navRecords").addClass("active");

        viewController.update_records();
    },

    update_records: function () {
        var tableBody = $("#recordViewTableBody");
        var i, row, module, modules;

        tableBody.empty();
        modules = ModulesController.modules;

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

    show_modules: function () {
        viewController.hideAll();
        $("#coursesView").show();
        $("#navCourses").addClass("active");
        viewController.update_modules();
    },

    update_modules: function () {
        var tableBody = $("#coursesViewTableBody");
        var i, row, module, modules;

        tableBody.empty();
        modules = ModulesController.modules;

        for (i = 0; i < modules.length; i++) {
            module = modules[i];
            row = '<tr>';
            row += '<td>' + module.getNumber() + '</td>';
            row += '<td>' + module.getName() + '</td>';
            row += '<td>' + module.getNameShort() + '</td>';
            row += '<td>' + module.getType() + '</td>';
            row += '<td>' + module.getCreditPoints() + '</td>';
            row += '<td>' + module.getMark() + '</td>';
            row += '<td>' +
                '<div class="btn-group">' +
                '<button type = "button" class = "btn btn-primary edit-module" data-toggle="modal" data-target="#editModuleView" data-moduleIndex="'+i+'">Edit</button>' +
                '<button type = "button" class = "btn btn-default">Delete</button>' +
                '</div>'
            '</td>'

            tableBody.append(row);
        }
    },

    hideAll: function () {
        $("#recordView").hide();
        $("#coursesView").hide();

        $("#navRecords").removeClass("active");
        $("#navCourses").removeClass("active");
    }
};

$(document).ready(function(){
    $(document).on("click", ".edit-module", function(){
                 ModulesController.setEditModule($(this).data("moduleindex"));
    });
});