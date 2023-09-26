var ngAppElem = angular.element(document.querySelector('[ng-app]') || document.querySelector('.ng-scope'));

window.$injector = ngAppElem.injector();
window.inject = $injector.invoke;
window.$rootScope = ngAppElem.scope();

// getService('auth') will create a variable `auth` assigned to the service `auth`.
var getService = serviceName =>
    inject([serviceName, s => window[serviceName] = s]);

Object.defineProperties(window, {
    $scope: {
        get() {
            var elem = angular.element($0);
            return elem.isolateScope() || elem.scope();
        },
    },
    $ctrl: {
        get() {
            return this.$scope.$ctrl;
        },
    },
});

/**
 * USAGE
 * 
 * First copy the script and paste it in Chrome DevTools in Sources -> left pane -> Snippets.
 * Then, after loading an Angular page, right click on the snippet and choose "run".
 * Afterwards, you have the following available in the console:
 * 
 * 1) $rootScope
 * 2) `inject(function ($q, $compile) { ...use $q and $compile here... })`;
 * 3) Click on an element in DevTools; now `$scope` in the console points at the element scope
 *    (isolate if one exists) and `$ctrl` points to `$scope.$ctrl`.
 * 4) getService('foo') creates a global `foo` variable pointing to the `'foo'` service.
 * 
 * Enjoy!
 */