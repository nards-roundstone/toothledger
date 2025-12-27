import React from "react";

const PrivacyPage = () => {
    return (
        <div className="space-y-4">
            <h2 className="text-3xl font-bold">Privacy Policy</h2>

            <div className="space-y-3 text-sm text-slate-700">
                <p>
                    ToothLedger does not collect, store, or transmit personal data.
                </p>

                <p>
                    All tooth maps are created locally in the user’s browser. No accounts, logins,
                    or cloud storage are used.
                </p>

                <p>
                    ToothLedger does not use analytics, tracking cookies, or advertising SDKs.
                </p>

                <p>
                    If you access ToothLedger via a QR code, no information about the scan is retained.
                </p>

                <p className="text-slate-600">
                    This app is intended as a visual aid for dental communication and does not replace
                    professional medical records.
                </p>

                <p className="text-xs text-slate-500">Last updated: December 2025</p>
            </div>
        </div>
    );
};

export default PrivacyPage;
