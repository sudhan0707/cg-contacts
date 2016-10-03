/* Copyright (C) - All Rights Reserved
 * Written by sgnaneshwar, 10/2/2016
 */
'use strict';

//Main module bootstrap and dependencies
angular.module(ApplicationConfiguration.applicationModuleName,ApplicationConfiguration.applicationModuleVendorDependencies);

//Application starts here
angular.element(document).ready(function(){
   angular.bootstrap(document, [ApplictionConfiguration.applicationModuleName]);
});