
function KnownController($scope,$http)
{
    //get albert drive lat long
    //<iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.uk/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Albert+Drive,+Glasgow&amp;aq=0&amp;oq=Albert+Drive+&amp;sll=57.746995,-4.687341&amp;sspn=6.957974,16.896973&amp;ie=UTF8&amp;hq=&amp;hnear=Albert+Dr,+Glasgow,+United+Kingdom&amp;ll=55.843314,-4.280513&amp;spn=0.014288,0.033002&amp;t=m&amp;z=14&amp;iwloc=A&amp;output=embed"></iframe><br /><small><a href="https://maps.google.co.uk/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Albert+Drive,+Glasgow&amp;aq=0&amp;oq=Albert+Drive+&amp;sll=57.746995,-4.687341&amp;sspn=6.957974,16.896973&amp;ie=UTF8&amp;hq=&amp;hnear=Albert+Dr,+Glasgow,+United+Kingdom&amp;ll=55.843314,-4.280513&amp;spn=0.014288,0.033002&amp;t=m&amp;z=14&amp;iwloc=A" style="color:#0000FF;text-align:left">View Larger Map</a></small>

    CreateGoogleMap(55.843314,-4.280513);
    GrabProjectData($scope,$http,'/json/data.json');
    $scope.filterLimit=10;
    GrabUserData("AlbertDrive");
    GrabUserTweet("354144109692321792");
}

function GrabUserTweet(tweetId)
{
    var params={
       id:tweetId
    };
    cb.__call(
        "statuses_show_ID",
        params,
        function (reply) {
            console.log(reply);
        },true
    );
}

function GrabUserData(user)
{
    var params = {
        screen_name: user
    };
    cb.__call(
        "users_show",
        params,
        function (reply) {
            console.log(reply);
        },true
    );
}

function GrabProjectData($scope,$http,url)
{
    //get the contributes, twitter handles
    $http.get(url).success(function(data) {
        var sortedData=data.sort(function(a,b){
            return (b.tweets - a.tweets);
        });
        $scope.contributors = sortedData;
        console.log(sortedData);
    });
}


function CreateGoogleMap(longitutde,latitude)
{
    var mapDiv = document.getElementById('googleMap');
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(longitutde,latitude),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var mapDiv = document.getElementById('googleMap');
    var map = new google.maps.Map(mapDiv, mapOptions);


}

//app.filter('',function()
//{});