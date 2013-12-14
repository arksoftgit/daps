<div class="row" style="padding-top:5px;">
<div class="col-lg-12">
<div class="section-article">
<h3 class="bodyFont">DAPS Select Function</h3>
</div> <!-- end of section-article -->
</div> <!-- end of col-lg-12 -->
</div> <!-- end of row -->

<div class="row" style="padding-top:30px;font-size:14px;font-weight:500;" >
  <div class="col-lg-6">
  <table width="100%">
    <tr style="height:30px;" ng-repeat="sysfunc in sysfuncs">
      <td align="left">
        <!-- <button type="button" class="btn btn-primary btn-lg btn-block big-buttons ">{{clienttitle}}</button> -->
        <a ng-mouseenter="showHideInfo('show',this)" ng-mouseleave="showHideInfo('hide',this)" name="funcbutton" href="#/{{sysfunc.action}}" class="btn {{sysfunc.boostrapbutton}} btn-sm big-buttons">{{sysfunc.title}}</a>
      </td>
    </tr>
  </table>
  </div><!-- end of col-lg-6 -->

  <div class="col-lg-6">
    <div class="infoarea" id="infoarea" style="display:none;"></div>
  </div>
</div> <!-- end of row -->

<div style="padding-bottom:50px;">&nbsp;</div>