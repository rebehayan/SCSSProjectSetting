const $ = globalThis.jQuery;

export default function Include($url, $area) {
  $.ajax({
    url: $url,
    context: document.body,
  }).done(function (html) {
    $($area).html(html);
  });
}
