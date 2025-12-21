import React from "react";
import FDIChart from "../components/FDIChart";

const PatientViewPage = () => {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">Your ToothLedger</h2>
            <p className="text-xs text-slate-600">
                Tap a tooth as your dentist explains your findings during each visit.
            </p>


            <FDIChart readOnly />

            <div className="mt-4 text-xs text-slate-600">
                <div className="font-semibold mb-1">How to use this page</div>
                <ul className="list-disc list-inside space-y-1">
                    <li>Bookmark this page on your phone so you can easily open ToothLedger before each appointment.</li>
                    <li>During chairside explanation, let your dentist point to the teeth on this map while describing any findings.</li>
                    <li>
                        After each visit, scroll through your ToothLedger to recall which teeth were discussed.
                    </li>

                </ul>
            </div>

            <div className="mt-3 text-xs text-slate-600 border rounded-lg px-3 py-3 bg-slate-50">
                <div className="font-semibold mb-1">🌱 Future options &amp; regen candidates</div>
                <p className="mb-1">
                    Some teeth may be kept stable today (for example with fillings or bondings) while preserving options for future
                    regenerative treatments once they become more common.
                </p>
                <p className="mb-1">
                    If your dentist mentions that a tooth is a good &quot;regen candidate&quot;, you can note that tooth number
                    and keep track of it here in your ToothLedger.
                </p>
                <p className="italic opacity-80">
                    Always ask your dentist what this means for you personally, and how often they recommend monitoring those teeth.
                </p>
            </div>
        </div>
    );
};

export default PatientViewPage;
