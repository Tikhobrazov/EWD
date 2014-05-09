jQuery(function($){
    /* Attaching files */
    var wrapper = $( ".file_upload" ),
        inp = wrapper.find( "input" ),
        btn = wrapper.find( "button" ),
        lbl = wrapper.find( "div" );

    btn.focus(function(){
        inp.focus()
    });
    // Crutches for the :focus style:
    inp.focus(function(){
        wrapper.addClass( "focus" );
    }).blur(function(){
        wrapper.removeClass( "focus" );
    });

    var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

    inp.change(function(){
        inp = $(this);
        btn = inp.prev('button');
        lbl = inp.prev('div.file_name');
        var file_name;
        if( file_api && inp[ 0 ].files[ 0 ] ) 
            file_name = inp[ 0 ].files[ 0 ].name;
        else
            file_name = inp.val().replace( "C:\\fakepath\\", '' );

        if( ! file_name.length )
            return;

        if( lbl.is( ":visible" ) ){
            lbl.text( file_name );
            btn.text( "Выберите" );
        }else
            btn.text( file_name );
    }).change();

    $('.clear_file').click(function() {
       $(this).prev('div.file_upload').find('div').text('Файл не выбран');
    });
});