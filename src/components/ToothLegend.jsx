import React from "react";

const defaultConditions = [
    "Healthy",
    "Fillings",
    "RCT",
    "Crown",
    "Missing",
    "Impacted",
    "Watch",
];

const ToothLegend = ({ selectedCondition, onSelectCondition }) => {
    return (
        <div>
            <div className="text-xs text-slate-500 mb-2">Condition tags</div>
            <div className="flex flex-wrap gap-2">
                {defaultConditions.map((cond) => {
                    const isSelected = cond === selectedCondition;
                    return (
                        <button
                            key={cond}
                            type="button"
                            onClick={() => onSelectCondition?.(cond)}
                            className={[
                                "border rounded-full px-3 py-1 text-xs",
                                isSelected
                                    ? "border-blue-500 font-semibold"
                                    : "border-slate-300 text-slate-700",
                            ].join(" ")}
                        >
                            {cond}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default ToothLegend;
