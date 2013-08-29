/*--------------------------------------------------------------------------*
 *  generalAccordion.js
 *  MIT-style license.
 *  2013 Komei Otake
 *--------------------------------------------------------------------------*/
;(function($){
	$.fn.generalAccordion = function(config){
		//デフォルトオプションの指定
		var options = $.extend({
			//デフォルトのアコーディオンを開閉するボタンのセレクタ
			generalAccordionBtn:".js-generalAccordionBtn",
			//デフォルトの開閉するパネルのセレクタ
			generalAccordionPanel:"js-generalAccordionPanel",
			//デフォルトのパネルが開くスピードの値
			openSpeed:500,
			//デフォルトのパネルが閉じるスピードの値
			closeSpeed:500
		}, config);

		// 関連付けた各要素(js-generalAccordion)に関数内の処理を実行する
		this.each(function(){
			var $self = $(this);
			var $generalAccordionBtn   = $self.find(options.generalAccordionBtn);
			var $generalAccordionPanel = $self.find(options.generalAccordionPanel);

			// パネルを全て隠す
			$generalAccordionPanel.hide();

			// ボタンがクリックされた時の処理
			$generalAccordionBtn.on("click", function(ev){
				// もし、クリックされた要素の次の要素がdisplay:noneだったら
				if($(this).next().css("display") !== "none") {
					// slideUpを実行
					$(this).next().slideUp(options.openSpeed);
				// display:noneじゃなかったら
				} else {
					// slideDownを実行
					$(this).next().slideDown(options.closeSpeed);
				}
				// a要素でも大丈夫なように、ブラウザの挙動を止める
				return false;
			});
		});
	return this;
	};
})(jQuery);