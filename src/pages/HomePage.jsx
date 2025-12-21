import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-semibold">ToothLedger</h1>
            <p className="text-sm text-slate-700">
                A simple chairside tooth map that patients can take home on their phone.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                <button
                    onClick={() => navigate("/clinic")}
                    className="border rounded-lg px-4 py-3 text-left hover:bg-slate-100"
                >
                    <div className="font-semibold text-sm">Clinic Mode</div>
                    <div className="text-xs text-slate-600">
                        Dentist view – update the patient&apos;s tooth map during consult.
                    </div>
                </button>

                <button
                    onClick={() => navigate("/patient")}
                    className="border rounded-lg px-4 py-3 text-left hover:bg-slate-100"
                >
                    <div className="font-semibold text-sm">Patient View</div>
                    <div className="text-xs text-slate-600">
                        Read-only view patients can bookmark on their phone.
                    </div>
                </button>

                <button
                    onClick={() => navigate("/qr")}
                    className="border rounded-lg px-4 py-3 text-left hover:bg-slate-100"
                >
                    <div className="font-semibold text-sm">QR for Patients</div>
                    <div className="text-xs text-slate-600">
                        Show a &quot;Scan Me&quot; code in the clinic, loyalty on autopilot.
                    </div>
                </button>
            </div>
        </div>
    );
};

export default HomePage;
