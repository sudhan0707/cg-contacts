/* Copyright (C) - All Rights Reserved
 * Written by sgnaneshwar, 10/2/2016
 */
'use strict';

var ApplicationConfiguration = (function(){
    var applicationModuleName = 'contacts',
        applicationModuleVendorDependencies = [];

    var registerModule = function (ModuleName, dependencies){
        angular.module(moduleName, dependencies || []);
        angular.module(applicationModuleName).requires.push(moduleName);
    }

    return {
        applicationModuleName: applicationModuleName,
        applicationModuleVendorDependencies: applicationModuleVendorDependencies,
        registerModule: registerModule
    }

})();