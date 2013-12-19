<div class="container">
<div class="row" style="padding-top:0px;">
<div class="col-lg-12">
<div class="section-article">
<h3 class="bodyFont">Request For Medical Information</h3>
</div> <!-- end of section-article -->
</div> <!-- end of col-lg-12-->
</div> <!-- end of row -->

<form id="informationrequest" method="post">
<div class="row" style="padding-top:20px;">

<div class="col-lg-12">
<div class="panel">
<div id="patientinfoselect">
<i id="patienticon" class="listHeaderIcon glyphicon glyphicon-circle-arrow-right"></i><span class="listHeader">Select Patient</span>
<input style="width:50%;"  class="entryInput" data-ng-model="patientlist" data-ng-change="getList('patientlistarea','patientname')" data-ng-blur="hideArea('patienticon')"  data-ng-focus="showArea('patienticon')"id="patientname" name="patientname" type="text" placeholder="Patient name" >
<input style="width:25%;" class="entryInput" id="patientid" name="patientid" type="text" placeholder="Patient ID">
</div>
<div id="patientlistarea" data-ng-init="patientnameshow = false" data-ng-show="patientnameshow" >
</div>

</div><!-- end of patientarea -->

</div> <!-- end of panel -->
</div> <!-- end of col-lg-12 -->
</div> <!-- end of row -->

<div class="row" style="padding-top:15px;">
<div class="col-lg-12">
<div class="panel">
<i data-ng-click="" class="listHeaderIcon glyphicon glyphicon-circle-arrow-right"></i><span class="listHeader">Select Provider</span>
<div id="providernamearea" style="display:none;">
<patient-select-type-ahead></patient-select-type-ahead>
</div><!-- end of patientarea -->
</div> <!-- end of panel -->
</div> <!-- end of col-lg-12 -->
</div> <!-- end of row -->

<div class="row" style="padding-top:15px;">
<div class="col-lg-12">
<div class="panel">
<i data-ng-click="" class="listHeaderIcon glyphicon glyphicon-circle-arrow-right"></i><span class="listHeader">Request Description</span>
<div id="requestdescriptionarea" style="display:none;">
<patient-select-type-ahead></patient-select-type-ahead>
</div><!-- end of patientarea -->
</div> <!-- end of panel -->
</div> <!-- end of col-lg-12 -->
</div> <!-- end of row -->

<div class="row" style="padding-top:15px;">
<div class="col-lg-6">
<div class="panel">
<i data-ng-click="" class="listHeaderIcon glyphicon glyphicon-circle-arrow-right"></i><span class="listHeader">Request Method</span>
<div id="requestmethodmearea" style="display:none;">
<patient-select-type-ahead></patient-select-type-ahead>
</div><!-- end of patientarea -->
</div> <!-- end of panel -->
</div> <!-- end of col-lg-6 -->

<div class="col-lg-6" style="padding-top:20px;padding-left:30%;">
<div id="informationrequestbutton">
<button type="button" id="informationrequestprocess" class="btn btn-success btn-lg btn-block process-buttons ">Process Request</button>
</div> <!-- end of informationrequestbutton -->
</div> <!-- end of col-lg-6 -->
</div> <!-- end of row -->
</form>

</div> <!-- end of container -->
<div style="padding-bottom:30px;"></div>
