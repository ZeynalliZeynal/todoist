"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyEmailTemplate = void 0;
const verifyEmailTemplate = (url) => ({
    subject: "Verify Email",
    text: "Click to verify email",
    html: `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head>
<title></title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<!--[if !mso]>-->
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!--<![endif]-->
<meta name="x-apple-disable-message-reformatting" content="" />
<meta content="target-densitydpi=device-dpi" name="viewport" />
<meta content="true" name="HandheldFriendly" />
<meta content="width=device-width" name="viewport" />
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
<style type="text/css">
table {
border-collapse: separate;
table-layout: fixed;
mso-table-lspace: 0pt;
mso-table-rspace: 0pt
}
table td {
border-collapse: collapse
}
.ExternalClass {
width: 100%
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
line-height: 100%
}
body, a, li, p, h1, h2, h3 {
-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-text-size-adjust: none !important
}
body, #innerTable {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale
}
#innerTable img+div {
display: none;
display: none !important
}
img {
Margin: 0;
padding: 0;
-ms-interpolation-mode: bicubic
}
h1, h2, h3, p, a {
line-height: inherit;
overflow-wrap: normal;
white-space: normal;
word-break: break-word
}
a {
text-decoration: none
}
h1, h2, h3, p {
min-width: 100%!important;
width: 100%!important;
max-width: 100%!important;
display: inline-block!important;
border: 0;
padding: 0;
margin: 0
}
a[x-apple-data-detectors] {
color: inherit !important;
text-decoration: none !important;
font-size: inherit !important;
font-family: inherit !important;
font-weight: inherit !important;
line-height: inherit !important
}
u + #body a {
color: inherit;
text-decoration: none;
font-size: inherit;
font-family: inherit;
font-weight: inherit;
line-height: inherit;
}
a[href^="mailto"],
a[href^="tel"],
a[href^="sms"] {
color: inherit;
text-decoration: none
}
</style>
<style type="text/css">
@media (min-width: 481px) {
.hd { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.hm { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.t34,.t42{width:480px!important}.t28,.t36{text-align:center!important}.t27{vertical-align:top!important;width:600px!important}
}
</style>
<!--[if !mso]>-->
<link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@500;600;700&amp;display=swap" rel="stylesheet" type="text/css" />
<!--<![endif]-->
<!--[if mso]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>
<body id="body" class="t46" style="min-width:100%;Margin:0px;padding:0px;background-color:#F0F0F0;"><div class="t45" style="background-color:#F0F0F0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t44" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#F0F0F0;" valign="top" align="center">
<!--[if mso]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
<v:fill color="#F0F0F0"/>
</v:background>
<![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td align="center">
<table class="t35" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="600" class="t34" style="background-color:#FFFFFF;width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t34" style="background-color:#FFFFFF;width:600px;">
<!--<![endif]-->
<table class="t33" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t32"><div class="t31" style="width:100%;text-align:center;"><div class="t30" style="display:inline-block;"><table class="t29" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="top">
<tr class="t28"><td></td><td class="t27" width="600" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t26" style="width:100%;"><tr>
<td class="t25" style="background-color:transparent;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td><div class="t1" style="mso-line-height-rule:exactly;mso-line-height-alt:125px;line-height:125px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t5" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="40" class="t4" style="width:40px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t4" style="width:40px;">
<!--<![endif]-->
<table class="t3" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t2"><div style="font-size:0px;"><img class="t0" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="40" height="40" alt="" src="https://4bf13ffc-2643-4232-80c5-64e7fd74a582.b-cdn.net/e/b5db5ec0-57f1-4b47-9aaf-11599f5c989c/a962fe4a-4140-4832-a2aa-3786e579a93c.png"/></div></td>
</tr></table>
</td>
</tr></table>
</td></tr><tr><td><div class="t7" style="mso-line-height-rule:exactly;mso-line-height-alt:55px;line-height:55px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t11" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="315" class="t10" style="width:315px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t10" style="width:315px;">
<!--<![endif]-->
<table class="t9" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t8"><h1 class="t6" style="margin:0;Margin:0;font-family:Fira Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:52px;font-weight:700;font-style:normal;font-size:48px;text-decoration:none;text-transform:none;direction:ltr;color:#000000;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px;">Verify email</h1></td>
</tr></table>
</td>
</tr></table>
</td></tr><tr><td><div class="t12" style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t17" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="350" class="t16" style="width:350px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t16" style="width:350px;">
<!--<![endif]-->
<table class="t15" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t14"><p class="t13" style="margin:0;Margin:0;font-family:Fira Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:30px;font-weight:500;font-style:normal;font-size:20px;text-decoration:none;text-transform:none;direction:ltr;color:#666666;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">To verify your email, click the button below.</p></td>
</tr></table>
</td>
</tr></table>
</td></tr><tr><td><div class="t19" style="mso-line-height-rule:exactly;mso-line-height-alt:40px;line-height:40px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t23" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="308" class="t22" style="background-color:#0A0A0A;overflow:hidden;width:308px;border-radius:14px 14px 14px 14px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t22" style="background-color:#0A0A0A;overflow:hidden;width:308px;border-radius:14px 14px 14px 14px;">
<!--<![endif]-->
<table class="t21" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t20" style="text-align:center;line-height:58px;mso-line-height-rule:exactly;mso-text-raise:11px;"><a class="t18" href=${url} style="display:block;margin:0;Margin:0;font-family:Fira Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:58px;font-weight:600;font-style:normal;font-size:21px;text-decoration:none;direction:ltr;color:#FFFFFF;text-align:center;mso-line-height-rule:exactly;mso-text-raise:11px;" target="_blank">Verify your email</a></td>
</tr></table>
</td>
</tr></table>
</td></tr><tr><td><div class="t24" style="mso-line-height-rule:exactly;mso-line-height-alt:60px;line-height:60px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr></table></td>
</tr></table>
</td>
<td></td></tr>
</table></div></div></td>
</tr></table>
</td>
</tr></table>
</td></tr><tr><td align="center">
<table class="t43" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="600" class="t42" style="background-color:transparent;width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t42" style="background-color:transparent;width:600px;">
<!--<![endif]-->
<table class="t41" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr>
<td class="t40"><div class="t39" style="width:100%;text-align:center;"><div class="t38" style="display:inline-block;"><table class="t37" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="top">
<tr class="t36"><td></td>
<td></td></tr>
</table></div></div></td>
</tr></table>
</td>
</tr></table>
</td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
</html>`,
});
exports.verifyEmailTemplate = verifyEmailTemplate;
