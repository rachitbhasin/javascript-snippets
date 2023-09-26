// Get instance of service
var a = ng.probe(window.getAllAngularRootElements()[0])
.injector.view.root.ngModule._providers
.find(p => p && p.constructor && p.constructor.name === 'CommonActionService');


// Trigger change detection
ng.probe(getAllAngularRootElements()[0]).injector.get(ng.coreTokens.ApplicationRef).tick()