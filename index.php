<!DOCTYPE html>
<html lang="en" data-ng-app="hadapsApp">
<head>
<title>HelathAllianze DAPS</title>
<meta name="description" content="HealthAllianze DAPS">
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link href="css/bootstrap-glyphicons.css" rel="stylesheet" />
<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.1/css/font-awesome.css" rel="stylesheet">
<link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0-rc1/css/bootstrap.min.css" type="text/css" rel="stylesheet" />
<link href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" type="text/css" rel="stylesheet" >
<link href="http://fonts.googleapis.com/css?family=OFL+Sorts+Mill+Goudy+TT|PT+Sans" type="text/css" rel="stylesheet" >
<link href="css/hadaps.css" rel="stylesheet" />

<!-- Vendor Libs -->
<script src="//code.angularjs.org/1.2.1/angular.min.js"></script>
<script src="//code.angularjs.org/1.2.1/angular-route.min.js"></script>
<script src="//code.angularjs.org/1.2.1/angular-animate.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

<!-- UI Libs -->
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
<script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0-rc1/js/bootstrap.min.js"></script>
<script src="http://jqueryrotate.googlecode.com/svn/trunk/jQueryRotate.js"></script>

<!-- App libs -->
<script src="app/hadapsApp.js"></script>
<script src="app/controllers/controllers.js"></script>
<script src="app/factories/factories.js"></script>
<script src="app/services/hadapsservice.js"></script>
<script src="app/services/loginservice.js"></script>
<script src="app/services/adminfunctionservice.js"></script>
<script src="app/services/dialogservice.js"></script>
<script src="app/directives/directives.js"></script>
<script src="app/validations/validate.js"></script>

<script src="Scripts/hadaps.js"></script>
</head>

<body style="background:white;" data-ng-controller="hadapsParentController" >

<div style="padding-left:50px;padding-bottom:25px;width:100%;background:#5E8483">
    <a class="navbar-brand" style="text-decoration:none;float:left;" href="#/home"><img style="height:75px;" src="img/haicon.png" alt="logo"></a>
    <div style="padding-top:35px;">
        <span id="cmtitle" class="bodyFont" style="color:white;padding-left:15px;padding-right:0px;margin:auto;letter-spacing:12px;font-size:35px;">HealthAllianze DAPS</span> 
    </div>
</div>

<div class="container" style="padding-top:20px;">
<div style="background:white;clear:both;" data-ng-view="" class="view-animate"></div>
</div> <!-- end of container top -->

<div style="background:#855D65;height:275px;">
	<div class="container" style="padding-top:20px;">
	<div id="userdisplay" style="float:left">
		<span style="color:white;font-weight:800;">Admin User: {{adminusername}}</span>
	</div>
	<div id="quickpickdisplay" style="float:right">
		<span style="color:white;font-weight:800;">
		Quick Select: <select data-ng-model="functionlistdisplay" 
		ng-options="adminfunction.title for adminfunction in adminfunctions" 
		ng-change="change(functionlistdisplay)"> </select> 
		</span>
	</div>
	
	</div><!-- end of container top -->
</div> <!-- end of footer -->

</body>
</html>
