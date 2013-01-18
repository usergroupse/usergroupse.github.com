function showTwitter() {
  new TWTR.Widget({
    version: 2,
    type: 'list',
    rpp: 30,
    interval: 6000,
    title: 'Tweets from the usergroups',
    subject: '',
    width: 300,
    height: 300,
    theme: {
      shell: {
        background: '#D3FF82',
        color: '#363D52'
      },
      tweets: {
        background: '#D3FF82',
        color: '#363D52',
        links: '#121D28'
      }
    },
    features: {
      scrollbar: true,
      loop: false,
      live: true,
      hashtags: true,
      timestamp: true,
      avatars: true,
      behavior: 'all'
    }
  }).render().setList('xlson', 'stodev').start();
}
var allEvents='<iframe src="https://www.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=7rvvlpilutdt53vm9lbc2o2d20%40group.calendar.google.com&amp;color=%23125A12&amp;src=ifskb2drnv82aq36mjt0ho2cp0%40group.calendar.google.com&amp;color=%23856508&amp;src=oarn29ir2vm2kjfaa5vof7qicg%40group.calendar.google.com&amp;color=%23182C57&amp;ctz=Europe%2FStockholm" style=" border-width:0 " width="100%" height="600" frameborder="0" scrolling="no"></iframe>';

var paidEvents='<iframe src="https://www.google.com/calendar/embed?src=ifskb2drnv82aq36mjt0ho2cp0%40group.calendar.google.com&ctz=Europe/Stockholm" style="border: 0" width="100%" height="600" frameborder="0" scrolling="no"></iframe>';

var freeEvents='<iframe id="calendar" src="https://www.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;src=oarn29ir2vm2kjfaa5vof7qicg%40group.calendar.google.com&amp;color=%23691426&amp;ctz=Europe%2FParis" style=" border-width:0 " width="100%" height="600" frameborder="0" scrolling="no"></iframe>'
$(document).ready(function() {
  $("input").click(function() {
    var checkedCount = $("input:checked").length;
    console.log(checkedCount);
    if(checkedCount==2) {
      console.log("all")
      $("#calendar").html(allEvents);
    } else if($("input[id=free]:checked").length==1) {
      console.log("free")
      $("#calendar").html(freeEvents);       
    }   else if($("input[id=paid]:checked").length==1) {
      console.log("paid")
      $("#calendar").html(paidEvents); 
    }        
  });
  $("#calendar").html(freeEvents);
});
