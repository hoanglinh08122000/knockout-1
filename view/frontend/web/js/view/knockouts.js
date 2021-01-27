define([
    'jquery',
    'ko',
    'uiComponent',
    'mage/url',
    'mage/storage'
], function ($, ko, Component, urlBuilder, storage) {
    'use strict';
    require(["jquery", "mage/url"], function ($, urlBuilder) {
        $(document).ready(function () {
            // up date
            $(".Update").click(function () {
                $.ajax({
                    url: "",
                    type: 'POST',
                    dataType: 'json',
                    data: {},
                    success: function (response) {
                        let toastr;
                        toastr.success(response);
                        $('#from-edit').modal('hide');
                        console.log(response.data)
                        // $('tbody').prepend('<tr><td id="firstname"></td></tr>');
                    }
                })

            });

            // delete
            $(".Delete").click(function () {
                location.reload();
                let id_employee = $(this).data("pid");
                let url = urlBuilder.build('knockout/employee/delete');
                if (confirm('Xóa là lại phải insert lại đấy nhé !!')) {
                    $.ajax({
                        url: url,
                        type: 'POST',
                        dataType: 'json',
                        data: {
                            id: id_employee
                        },
                        success: function (response) {
                            console.log("response");
                        },
                        error: function (xhr, status, errorThrown) {
                            console.log('Error happens. Try again.');
                        }
                    });
                }

            });
            //button
            $(document).ready(function () {
                $("#Createe").click(function (e) {
                    $("#from").hide();
                    $("#Createe").click(function (e) {
                        $("#from").show();
                    });
                });
                $("#Exit").click(function (e) {
                    $("#from").show();
                    $("#Exit").click(function (e) {
                        $("#from").hide();
                    });
                });
            });

            //save data
            $(document).ready(function () {
                $(".submit").click(function (e) {
                    // e.preventDefault();
                    // alert("abcd");
                    let department = jQuery("input[name='department']").val();
                    let email = jQuery("input[name='email']").val();
                    let firstname = jQuery("input[name='firstname']").val();
                    let lastname = jQuery("input[name='lastname']").val();
                    let working_years = jQuery("input[name='wrokingyears']").val();
                    let dob = jQuery("input[name='dob']").val();
                    let salary = jQuery("input[name='salary']").val();
                    let note = jQuery("input[name='note']").val();
                    let url = urlBuilder.build('knockout/employee/create');
                    $.ajax({
                        type: 'post',
                        url: url,
                        rules: {
                            "department": {
                                required: true,
                                maxlength: 30
                            },
                            "firstname": {
                                required: true,
                                maxlength: 30
                            },
                            "lastname": {
                                required: true,
                                maxlength: 30
                            },
                            "email": {
                                required: true,
                                email: true
                            },
                            "salary": {
                                required: true,
                                number: 10000000000
                            },
                            "note": {
                                required: true,
                                maxlength: 30
                            }
                        },
                        messages: {
                            firstname: "Please enter your firstname",
                            lastname: "Please enter your lastname",
                            email: "Please enter a valid email address"
                        },

                        data: {
                            department: department,
                            email: email,
                            firstname: firstname,
                            lastname: lastname,
                            working_years: working_years,
                            dob: dob,
                            salary: salary,
                            note: note
                        },
                        success: function (response) {
                            console.log("response");
                        },
                        error: function (xhr, status, errorThrown) {
                            console.log('Error happens. Try again.');
                        }

                    })
                })
            });

        });
    });

    // knockout js
    let knockout = "";
    return Component.extend({

        defaults: {
            template: 'Dtn_Knockout/list'
        },

        initialize: function () {
            this._super();
            this.knockouts();
        },

        knockouts: function () {
            knockout = ko.observable("Employee Knockout Js");
            return knockout;
        },

    });


});
