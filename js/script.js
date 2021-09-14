let count = 1;

document.querySelector('#btn-load-video-1').addEventListener('click', reload_iframe);
document.querySelector('#btn-add-link').addEventListener('click', create_input);

function reload_iframe() {
    let data = $(this).data('video');
    console.log(this, data);
    let id = this.id.split('-')[3];
    let url = $('#url-video-'+ id).val();

    url = fix_url(url);
    window.frames['iframe-video'].src = url;
}

function fix_url(url) {
    return 'https://www.youtube.com/embed/' + url;

}

function create_input() {
    count++;

    const target = document.querySelector('#new_link');

    const row = document.createElement('div');
    row.setAttribute('class', 'row mt-2');

    const col_md_4 = document.createElement('div');
    col_md_4.setAttribute('class', 'col-md-4');

    const col_md_6 = document.createElement('div');
    col_md_6.setAttribute('class', 'col-md-6');

    const col_md_2 = document.createElement('div');
    col_md_2.setAttribute('class', 'col-md-2');

    const codigo_video = document.createElement('input');
    codigo_video.setAttribute('type', 'url');
    codigo_video.setAttribute('id', 'url-video-' + count);
    codigo_video.setAttribute('class', 'shadow form-control');
    codigo_video.setAttribute('placeholder', 'url');
    codigo_video.setAttribute('value', '');

    const titulo_do_video = document.createElement('input');
    titulo_do_video.setAttribute('type', 'text');
    titulo_do_video.setAttribute('class', 'shadow form-control');
    titulo_do_video.setAttribute('placeholder', 'Título do vídeo');

    const buttom = document.createElement('buttom');
    buttom.setAttribute('class', 'btn btn-primary shadow');
    buttom.setAttribute('id', 'btn-load-video-' + count);
    buttom.setAttribute('data-video', count);
    buttom.addEventListener('click', reload_iframe);
    buttom.innerText = 'Carregar';

    col_md_4.appendChild(codigo_video);
    col_md_6.appendChild(titulo_do_video);
    col_md_2.appendChild(buttom);

    row.appendChild(col_md_4);
    row.appendChild(col_md_6);
    row.appendChild(col_md_2);
    target.appendChild(row);
}