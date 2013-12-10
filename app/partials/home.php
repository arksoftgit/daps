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
    <tr style="height:60px;" ng-repeat="clienttitle in clienttitles">
      <td align="center">
        <!-- <button type="button" class="btn btn-primary btn-lg btn-block big-buttons ">{{clienttitle}}</button> -->
        <a href="#/clientsetup" class="btn btn-primary btn-lg btn-block big-buttons">{{clienttitle}}</a>
      </td>
    </tr>
  </table>
  </div><!-- end of col-lg-6 -->

  <div class="col-lg-6">
  <table width="100%">
    <tr style="height:60px;" ng-repeat="providertitle in providertitles">
      <td align="center">
        <button type="button" class="btn btn-info btn-lg btn-block big-buttons ">{{providertitle}}</button>
      </td>
    </tr>
  </table>
  </div><!-- end of col-lg-6 -->
</div> <!-- end of row -->  

<div class="row" style="padding-top:40px;font-size:14px;font-weight:500;">
  <div class="col-lg-12">
  <table width="100%">
    <tr style="height:60px;" ng-repeat="admintitle in admintitles">
      <td align="center">
        <button type="button" class="btn btn-danger btn-lg btn-block big-buttons ">{{admintitle}}</button>
      </td>
    </tr>
  </table>
  </div><!-- end of col-lg-12 -->
</div> <!-- end of row -->

<div style="padding-bottom:50px;">&nbsp;</div>