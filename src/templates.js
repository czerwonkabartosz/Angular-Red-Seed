angular.module("templatescache", []).run(["$templateCache", function($templateCache) {$templateCache.put("modules/test/test.tpl.html","123\n456\n");}]);