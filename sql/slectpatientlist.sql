use hadb;
select CONCAT(pa.firstname, ' ', pa.lastname) name, 
email, mobilephone, address1, address2, city, state, zip, pa.id as patientid
from hapatienttbl pa
inner join hapatientaddresstbl adr on pa.ID = adr.patientid and addresstype = 'primary'
left join haaddresstbl ad on ad.ID = adr.addressid 
where firstname like 'ro%' or lastname like 'ro%'