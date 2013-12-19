<div class="container">
<div class="row" style="padding-top:0px;">
<div class="col-lg-12">
<div class="section-article">
<h3 class="bodyFont">Client Setup</h3>
</div> <!-- end of section-article -->
</div> <!-- end of col-lg-12-->
</div> <!-- end of row -->

<div class="row">
<div class="col-lg-7">
<form id="clientsetup" method="post">
    <div style="padding-top:20px;padding-left:35px;">
    <div id="alert_msg_pi"></div>
    <table>
    <tr style="height:45px;">
    	<td align="right"><strong>First Name</strong>
        </td>
    	<td align="left" style="padding-left:10px;" colspan=4>
	    	<input style="width:400px" type="text" id="firstname" name="firstname" placeholder="Enter your First name" required>
    	</td>
    </tr>
    <tr style="height:45px;">
        <td align="right"><strong>Last Name</strong></td>
        <td align="left" style="padding-left:10px;" colspan=4>
            <input style="width:400px" type="text" id="lastname" name="lastname" placeholder="Enter your Last name" required>
        </td>
    </tr>
    <tr style="height:45px;">
    	<td align="right"><strong>Address</strong></td>
    	<td align="left" style="padding-left:10px;" colspan=4>
	    	<input style="width:400px;" type="text" id="address1" name="address1" placeholder="Enter your billing Address" required>
        </td>
    </tr>
    <tr style="height:45px;">
    	<td align="right"><strong>&nbsp;</strong></td>
    	<td align="left" style="padding-left:10px;" colspan=4>
	    	<input style="width:400px;" type="text" id="address2" name="address2" placeholder="Enter your billing Address">
    	</td>
    </tr>
    <tr style="height:45px;">
    	<td align="right"><strong>City</strong></td>
    	<td align="left" style="padding-left:10px;" colspan=4>
	    	<input style="width:400px;" type="text" id="city" name="city" placeholder="Enter your billing City" required>
    	</td>
    </tr>
	<tr style="height:45px;">
    	<td align="right"><strong>State</strong></td>
    	<td align="left" style="padding-left:10px;">
            <state-list-display 
                nameid="state">
            </state-list-display>   
    	</td>

    	<td style="width:50px;">&nbsp;</td>

    	<td align="right"><strong>Zip</strong></td>
    	<td align="left" style="padding-left:10px;">
	    	<input  style="width:100px;" type="text" id="zip" name="zip" placeholder="Enter your ZIP" required>
        </td>
    </tr>
    <tr style="height:45px;">
    	<td align="right"><strong>Phone</strong></td>
    	<td align="left" style="padding-left:10px;" colspan=4>
            <phone-number-display class="tips" onkeydown="closeAlert('#alert_msg')" data-toggle='tooltip' data-placement='right' title='Dashes will be added as you type.'
                    nameid="phone" classname="">
            </phone-number-display> 
    	</td>
    </tr>
    <tr style="height:45px;">
    	<td align="right"><strong>Country</strong></td>
    	<td align="left" style="padding-left:10px;" colspan=4>
	    	<input style="width:400px;" type="text" id="country" name="country" placeholder="Enter your client Country if not USA">
    	</td>
    </tr>
    <tr style="height:45px;">
    	<td align="right"><strong>eMail</strong></td>
    	<td align="left" style="padding-left:10px;" colspan=4>
	    	<input style="width:400px;" type="email " id="email" name="email" placeholder="Enter your eMail address" required>
    	</td>
    </tr>
    </table>  
</div>
</form>
</div><!-- end of col-lg-7 -->

<div style="padding-top:20px;" class="col-lg-5">
<div class="panel">
<form id="clientsetuppayment" method="post">
<div style="pading:20px; font-size:12px;">
<div style="padding-bottom:15px;font-weight:800;">Payment Method:</div>
<input type="radio" name="paymentmethod" value="cc"><span style="padding-left:10px;">Credit Card</span><br>
<input type="radio" name="paymentmethod" value="pp"><span style="padding-left:10px;">Pay Pal</span><br>
<input type="radio" name="paymentmethod" value="in"><span style="padding-left:10px;">Invoice</span><br>
</div><!-- end of div 20 -->

<div id="paymentdetail" style="padding-top:30px; font-size:12px;">
<div id="creditacardpaymentchoice" style="display:none;">
<div style="padding-bottom:15px;font-weight:800;">Credit Card Payment</div>
<div id="alert_msg_cc"></div>
<input style="width:80%; margin-bottom:15px;" type="text" id="ccnbr" name="ccnbr" placeholder="Enter Credit Card Number" required>
<input style="width:70%; margin-bottom:15px;" type="text" id="ccexpdate" name="ccexpdate" placeholder="Enter expiration Date" required>
<input style="width:30%; margin-bottom:15px;" type="text" id="ccid" name="ccid" placeholder="Enter CID" required>
</div> <!-- end of creditacardpaymentchoice -->

<div id="paypalpaymentchoice" style="display:none;">
<div style="padding-bottom:15px;font-weight:800;">Pay Pal</div>
<div id="alert_msg_cc"></div>
<input style="width:80%; margin-bottom:15px;" type="text" id="ppid" name="ppid" placeholder="Enter Pay Pal id" required>
</div> <!-- end of paypalpaymentchoice -->

<div id="invoicepaymentchoice" style="display:none;">
<div style="padding-bottom:15px;font-weight:800;">Invoice</div>
<div id="alert_msg_cc"></div>
<input type="radio" name="invoicefrequency" value="mm"><span style="padding-left:10px;">Monthly</span><br>
<input type="radio" name="invoicefrequency" value="qt"><span style="padding-left:10px;">Quaterly</span><br>
<input type="radio" name="invoicefrequency" value="yr"><span style="padding-left:10px;">Yearly</span><br>
</div> <!-- end of invoicepaymentchoice -->

</div> <!-- end of paymentdetail -->
</form>
</div> <!-- end of pannel -->

<div id="clientsetupprocess" style="padding:20px;">
<button type="button" id="clientsetupprocess" class="btn btn-success btn-lg btn-block process-buttons ">Process</button>
</div><!-- end of clientsetupsave -->
</div><!-- end of col-lg-5 -->
</div><!-- end of row  -->

</div> <!-- end of container -->
<div style="padding-bottom:30px;"></div>
