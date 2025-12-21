import React from "react";
import { QRCodeSVG } from "qrcode.react";

const QRPage = () => {
    const url = `${window.location.origin}/patient`;

    return (
        <div className="space-y-4 flex flex-col items-center">
            <h2 className="text-xl font-semibold text-center">
                Scan Me to Open ToothLedger
            </h2>
            <p className="text-xs text-slate-600 text-center max-w-md">
                Ask patients to open their camera and scan this code. It will open the
                ToothLedger patient page on their phone, which they can bookmark.
            </p>

            <div className="border rounded-xl bg-white p-4 shadow-sm">
                <QRCodeSVG value={url} size={220} />
            </div>

            <div className="text-xs text-slate-500 text-center max-w-md">
                Tip: Print this page or keep it open on a tablet in the waiting area
                with a &quot;Scan Me Before Your Checkup&quot; sign.
            </div>

            <div className="text-[10px] text-slate-400 mt-2">URL: {url}</div>
        </div>
    );
};

export default QRPage;
