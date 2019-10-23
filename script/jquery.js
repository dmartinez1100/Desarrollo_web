$('.lol').hide()
$(document).ready(
    ()=>{
        $('.par1').addClass('info').css('background','red')
        setTimeout( ()=>{$('#par2').prev().css('background','white')},1000)
        $('.par1').siblings().addBack().css('color','blue')
    }
)
