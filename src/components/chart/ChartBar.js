import React from "react";
import './ChartBar.css'
const ChartBar = (props) => {
    const maxPriceForMonth = 30000;
    const persent = Math.round((props.el.currentPrice * 100) / maxPriceForMonth);
    if (persent > 100) {
        return (
            <div className="chart-bar">
                <div className="chart-bar__inner">
                    <div className="chart-bar__fill" style={{ height: 100 }}></div>
                </div>
                <div className="">{props.el.label}</div>
            </div >)
    } else {
        return (
            <div className="chart-bar">
                <div className="chart-bar__inner">
                    <div className="chart-bar__fill" style={{ height: persent }}></div>
                </div>
                <div className="">{props.el.label}</div>
            </div >
        )
    }

}
export default ChartBar