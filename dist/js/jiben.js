/*
* @Author: Demi
* @Date:   2016-11-29 11:25:18
* @Last Modified by:   Demi
* @Last Modified time: 2016-11-29 16:01:40
*/

'use strict';
	var app = angular.module('work', ['ngRoute']);
	app.controller('workController', ['$scope', function($scope){
		$scope.dataList = {
		  	"firstName": [
			  	{
			  		"name":"G30连霍高速" ,
				  	"lastName": [
					   {
					      "road": "连霍至商丘段", 
					      "long": "180", 
					      "lukuang": "1",
					      "link":""
					   }, 
					   {
					      "road": "连霍至商丘段", 
					      "long": "220", 
					      "lukuang": "1"
					   }, 
					   {
					      "road": "连霍至商丘段", 
					      "long": "200", 
					      "lukuang": "1"
					   }, 
					   {
					      "road": "连霍至商丘段", 
					      "long": "170", 
					      "lukuang": "1"
					   }, 
					   {
					      "road": "连霍至商丘段", 
					      "long": "100", 
					      "lukuang": "1"
					   }
					],
					"lastName2": [
					   {
					      "road": "商丘至连霍段", 
					      "long": "180", 
					      "lukuang": "1",
					      "link":""
					   }, 
					   {
					      "road": "商丘至连霍段", 
					      "long": "180", 
					      "lukuang": "1"
					   }, 
					   {
					      "road": "商丘至连霍段", 
					      "long": "180", 
					      "lukuang": "1"
					   }, 
					   {
					      "road": "商丘至连霍段", 
					      "long": "180", 
					      "lukuang": "1"
					   }, 
					   {
					      "road": "商丘至连霍段", 
					      "long": "180", 
					      "lukuang": "1"
					   }
					]
				},		  	
				{
			  		"name":"G30连霍高速" ,
				  	"lastName": [
					   {
					      "road": "连霍至商丘段", 
					      "long": "180", 
					      "lukuang": "1",
					      "link":""
					   }, 
					   {
					      "road": "连霍至商丘段", 
					      "long": "240", 
					      "lukuang": "1"
					   }, 
					   {
					      "road": "连霍至商丘段", 
					      "long": "110", 
					      "lukuang": "1"
					   }, 
					   {
					      "road": "连霍至商丘段", 
					      "long": "200", 
					      "lukuang": "1"
					   }, 
					   {
					      "road": "连霍至商丘段", 
					      "long": "180", 
					      "lukuang": "1"
					   }
					],
					"lastName2": [
					   {
					      "road": "商丘至连霍段", 
					      "long": "180", 
					      "lukuang": "1",
					      "link":""
					   }, 
					   {
					      "road": "商丘至连霍段", 
					      "long": "180", 
					      "lukuang": "1"
					   }, 
					   {
					      "road": "商丘至连霍段", 
					      "long": "180", 
					      "lukuang": "1"
					   }, 
					   {
					      "road": "商丘至连霍段", 
					      "long": "180", 
					      "lukuang": "1"
					   }, 
					   {
					      "road": "商丘至连霍段", 
					      "long": "180", 
					      "lukuang": "1"
					   }
					]
				},			
				{
			  		"name":"G30连霍高速" ,
				  	"lastName": [
					   {
					      "road": "连霍至商丘段", 
					      "long": "160", 
					      "lukuang": "1",
					      "link":""
					   }, 
					   {
					      "road": "连霍至商丘段", 
					      "long": "170", 
					      "lukuang": "1"
					   }, 
					   {
					      "road": "连霍至商丘段", 
					      "long": "180", 
					      "lukuang": "1"
					   }, 
					   {
					      "road": "连霍至商丘段", 
					      "long": "220", 
					      "lukuang": "1"
					   }, 
					   {
					      "road": "连霍至商丘段", 
					      "long": "110", 
					      "lukuang": "1"
					   }
					],
					"lastName2": [
					   {
					      "road": "商丘至连霍段", 
					      "long": "180", 
					      "lukuang": "1",
					      "link":""
					   }, 
					   {
					      "road": "商丘至连霍段", 
					      "long": "180", 
					      "lukuang": "1"
					   }, 
					   {
					      "road": "商丘至连霍段", 
					      "long": "180", 
					      "lukuang": "1"
					   }, 
					   {
					      "road": "商丘至连霍段", 
					      "long": "180", 
					      "lukuang": "1"
					   }, 
					   {
					      "road": "商丘至连霍段", 
					      "long": "180", 
					      "lukuang": "1"
					   }
					]
				},
			],
			"otherName": [
				{
					"bar" : "信息展示"
				},			
				{
					"bar" : "高速公路"
				},			
				{
					"bar" : "业主单位"
				},			
				{
					"bar" : "行政区划"
				},			
				{
					"bar" : "地图展示"
				},			
				{
					"bar" : "基础维护"
				},			
				{
					"bar" : "统计报表"
				},			
				{
					"bar" : "事件统计"
				},		
				{
					"bar" : "事件分析"
				}

			]
		};
	}]);
	app.config(function($routeProvider) {
		$routeProvider
	   .when('/', {
	      templateUrl: 'views/main.html',
	      controller: 'workController'
	    })
	   .when('/day/:id', {
	      templateUrl: 'views/day.html',
	      controller: 'workController'
	   })
	   .otherwise({
	      redirectTo: '/'
	   });
	});