import React, { useState } from "react";
import FDIChart from "../components/FDIChart";
import ToothLegend from "../components/ToothLegend";

const ClinicModePage = () => {
    const [selectedToothId, setSelectedToothId] = useState(null);
    const [selectedCondition, setSelectedCondition] = useState(null);
    const [toothMap, setToothMap] = useState({});

    const upsertTooth = (toothId, partial) => {
        setToothMap((prev) => {
            const existing = prev[toothId] || {
                condition: null,
                regenCandidate: false,
                regenNotes: "",
            };

            return {
                ...prev,
                [toothId]: {
                    ...existing,
                    ...partial,
                },
            };
        });
    };

    const handleConditionSelect = (condition) => {
        setSelectedCondition(condition);
        if (!selectedToothId) return;
        upsertTooth(selectedToothId, { condition });
    };

    const selectedToothInfo = selectedToothId ? toothMap[selectedToothId] : null;

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">Clinic Mode</h2>

            <p className="text-xs text-slate-600">
                Tap a tooth, then choose a condition. Patients can mirror this in their
                own ToothLedger via the QR page.
            </p>

            <div className="grid gap-4 md:grid-cols-[2fr,1fr]">
                {/* LEFT COLUMN */}
                <div className="overflow-x-auto">
                    <FDIChart
                        selectedToothId={selectedToothId}
                        onSelectTooth={setSelectedToothId}
                    />

                    <div className="mt-4 text-xs text-slate-600">
                        {selectedToothId ? (
                            <>
                                Tooth {selectedToothId}:{" "}
                                {selectedToothInfo?.condition || "no condition set yet"}
                            </>
                        ) : (
                            "No tooth selected yet."
                        )}
                    </div>
                </div>


                {/* RIGHT COLUMN */}
                <div className="space-y-4">
                    <ToothLegend
                        selectedCondition={selectedCondition}
                        onSelectCondition={handleConditionSelect}
                    />
                </div>


                {!selectedToothId && (
                    <div className="text-xs text-slate-500">
                        Select a tooth first, then choose a condition.
                    </div>
                )}
            </div>
        </div>
        </div >
    );
};

export default ClinicModePage;
