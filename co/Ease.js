var co;
(function (co) {
    var Ease = (function () {
        function Ease() {
        }
        Ease.ease_in_quad = "cubic-bezier(0.550,  0.085, 0.680, 0.530)";
        Ease.ease_in_cubic = "cubic-bezier(0.550,  0.055, 0.675, 0.190)";
        Ease.ease_in_quart = "cubic-bezier(0.895,  0.030, 0.685, 0.220)";
        Ease.ease_in_quint = "cubic-bezier(0.755,  0.050, 0.855, 0.060)";
        Ease.ease_in_sine = "cubic-bezier(0.470,  0.000, 0.745, 0.715)";
        Ease.ease_in_expo = "cubic-bezier(0.950,  0.050, 0.795, 0.035)";
        Ease.ease_in_circ = "cubic-bezier(0.600,  0.040, 0.980, 0.335)";
        Ease.ease_in_back = "cubic-bezier(0.600, -0.280, 0.735, 0.045)";
        Ease.ease_out_quad = "cubic-bezier(0.250,  0.460, 0.450, 0.940)";
        Ease.ease_out_cubic = "cubic-bezier(0.215,  0.610, 0.355, 1.000)";
        Ease.ease_out_quart = "cubic-bezier(0.165,  0.840, 0.440, 1.000)";
        Ease.ease_out_quint = "cubic-bezier(0.230,  1.000, 0.320, 1.000)";
        Ease.ease_out_sine = "cubic-bezier(0.390,  0.575, 0.565, 1.000)";
        Ease.ease_out_expo = "cubic-bezier(0.190,  1.000, 0.220, 1.000)";
        Ease.ease_out_circ = "cubic-bezier(0.075,  0.820, 0.165, 1.000)";
        Ease.ease_out_back = "cubic-bezier(0.175,  0.885, 0.320, 1.275)";
        Ease.ease_in_out_quad = "cubic-bezier(0.455,  0.030, 0.515, 0.955)";
        Ease.ease_in_out_cubic = "cubic-bezier(0.645,  0.045, 0.355, 1.000)";
        Ease.ease_in_out_quart = "cubic-bezier(0.770,  0.000, 0.175, 1.000)";
        Ease.ease_in_out_quint = "cubic-bezier(0.860,  0.000, 0.070, 1.000)";
        Ease.ease_in_out_sine = "cubic-bezier(0.445,  0.050, 0.550, 0.950)";
        Ease.ease_in_out_expo = "cubic-bezier(1.000,  0.000, 0.000, 1.000)";
        Ease.ease_in_out_circ = "cubic-bezier(0.785,  0.135, 0.150, 0.860)";
        Ease.ease_in_out_back = "cubic-bezier(0.680, -0.550, 0.265, 1.550)";
        return Ease;
    }());
    co.Ease = Ease;
})(co || (co = {}));
//# sourceMappingURL=Ease.js.map