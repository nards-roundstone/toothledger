import React from "react";

// Viewer-centric (left-to-right as you see it on screen)
const upperTeeth = [
    "28", "27", "26", "25", "24", "23", "22", "21", "11", "12", "13", "14", "15", "16", "17", "18",
];

const lowerTeeth = [
    "38", "37", "36", "35", "34", "33", "32", "31", "41", "42", "43", "44", "45", "46", "47", "48",
];

function ToothButton({ id, isSelected, readOnly, onSelect }) {
    return (
        <button
            type="button"
            disabled={readOnly}
            onClick={() => !readOnly && onSelect?.(id)}
            style={{
                // guarantee that buttons don't shrink and cause weird breaks
                flex: "0 0 auto",
            }}
            className={[
                "border rounded-md px-3 py-2 text-center text-xs",
                readOnly ? "bg-white" : "hover:bg-slate-100",
                isSelected ? "border-blue-500 font-semibold" : "",
            ].join(" ")}
        >
            {id}
        </button>
    );
}

function ToothRow({ teeth, selectedToothId, onSelectTooth, readOnly }) {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "nowrap",
                overflowX: "auto",
                whiteSpace: "nowrap",
                gap: "0.25rem",
                padding: "0.5rem",
                borderRadius: "0.75rem",
                background: "rgb(248 250 252)", // slate-50-ish
            }}
        >
            {teeth.map((id) => (
                <ToothButton
                    key={id}
                    id={id}
                    readOnly={readOnly}
                    isSelected={id === selectedToothId}
                    onSelect={onSelectTooth}
                />
            ))}
        </div>
    );
}

const FDIChart = ({ selectedToothId, onSelectTooth, readOnly = false }) => {
    return (
        <div>
            <div className="text-xs text-slate-400 mb-2">
                Tooth map · tap a tooth to explore
                {!readOnly && " and then choose a condition on the right."}
            </div>

            <div className="space-y-2">
                <div>
                    <div className="mb-1 text-[10px] uppercase tracking-wide text-slate-500">
                        Upper
                    </div>
                    <ToothRow
                        teeth={upperTeeth}
                        selectedToothId={selectedToothId}
                        onSelectTooth={onSelectTooth}
                        readOnly={readOnly}
                    />
                </div>

                <div>
                    <div className="mb-1 text-[10px] uppercase tracking-wide text-slate-500">
                        Lower
                    </div>
                    <ToothRow
                        teeth={lowerTeeth}
                        selectedToothId={selectedToothId}
                        onSelectTooth={onSelectTooth}
                        readOnly={readOnly}
                    />
                </div>
            </div>

            <div className="mt-2 text-[11px] text-slate-400">
                Tip: swipe left/right if you’re on a smaller screen.
            </div>
        </div>
    );
};

export default FDIChart;
