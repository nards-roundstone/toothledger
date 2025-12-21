import React, { useState } from "react";
import FDIChart from "../components/FDIChart";
import ToothLegend from "../components/ToothLegend";

// Each tooth now stores condition + regen info
// shape: { condition: string | null, regenCandidate: boolean, regenNotes: string }
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

    const handleRegenToggle = (checked) => {
        if (!selectedToothId) return;
        upsertTooth(selectedToothId, { regenCandidate: checked });
    };

    const handleRegenNotesChange = (event) => {
        if (!selectedToothId) return;
        upsertTooth(selectedToothId, { regenNotes: event.target.value });
    };

    const selectedToothInfo = selectedToothId ? toothMap[selectedToothId] : null;

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">Clinic Mode</h2>

            <p className="text-xs text-slate-600">
                Tap a tooth, then choose a condition. Patients can mirror this in their
                own ToothLedger via the QR page.
            </p>

            <div className="grid md:grid-cols-[2fr,1fr] gap-4">
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
                                {selectedToothInfo?.regenCandidate && (
                                    <span className="ml-1 text-emerald-700">
                                        🌱 regen candidate
                                    </span>
                                )}
                            </>
                        ) : (
                            "No tooth selected yet."
                        )}
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div>
                    {/* condition tags, future options, etc */}
                </div>
            </div>
        </div>
    );

};

export default ClinicModePage;
