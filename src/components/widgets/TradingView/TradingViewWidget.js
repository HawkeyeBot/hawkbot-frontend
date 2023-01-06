import React, { useEffect, useRef } from "react";

let tvScriptLoadingPromise;

const TradingViewWidget = ({ symbol, side }) => {
  const onLoadScriptRef = useRef();

  const container_id = `tradingview_${symbol}_${side}`;

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (document.getElementById(container_id) && "TradingView" in window) {
        new window.TradingView.widget({
          width: "100%",
          height: "100%",
          symbol: `BINANCE:${symbol}`,
          interval: "5",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          hide_legend: true,
          withdateranges: true,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          container_id,
        });
      }
    }
  }, [symbol, container_id]);

  return (
    <div className="tradingview-widget-container">
      <div id={container_id} />
    </div>
  );
};

export default React.memo(TradingViewWidget);
