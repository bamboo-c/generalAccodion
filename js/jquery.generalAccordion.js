/*--------------------------------------------------------------------------*
 *  generalAccordion.js
 *  MIT-style license.
 *  2013 Komei Otake
 *--------------------------------------------------------------------------*/
;(function($){
	$.fn.generalAccordion = function(config){
		//デフォルトオプションの指定
		var options = $.extend({
			//デフォルトのパネルが開くスピードの値
			openSpeed:500,
			//デフォルトのパネルが閉じるスピードの値
			closeSpeed:500
		}, config);

		// 関連付けた各要素(js-generalAccordion)に関数内の処理を実行する
		this.each(function(){
			var $self = $(this);
			// ボタンのhrefを変数に入れる
			var $btnAttr = $($self.attr("href"));

			// パネルを全て隠す
			$btnAttr.hide();

			// ボタンがクリックされた時の処理
			$self.on("click", function(ev){
				// もし、クリックされた要素hrefに入った要素がdisplay:noneだったら
				if($btnAttr.css("display") !== "none") {
					// slideUpを実行
					$btnAttr.slideUp(options.openSpeed);
				// display:noneじゃなかったら
				} else {
					// slideDownを実行
					$btnAttr.slideDown(options.closeSpeed);
				}
				// a要素でも大丈夫なように、ブラウザの挙動を止める
				return false;
			});
		});
	return this;
	};
})(jQuery);