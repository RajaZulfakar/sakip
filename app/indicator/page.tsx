export default function Page() {
  const iku = [
    {
      sasaran:
        "Meningkatnya kontribusi sektor ekonomi unggulan dalam memperkuat pertumbuhan ekonomi",
      indikator: ["Pertumbuhan ekonomi 3+-3"],
      target: ["3+-3"],
    },
    {
      sasaran:
        "Meningkatnya sektor pariwisata dan ekonomi kreatif dalam memperkuat pertumbuhan ekonomi",
      indikator: ["Kontribusi Sektor Pariwisata terhadap PAD, 2,5%"],
      target: ["2.5%"],
    },
    {
      sasaran: "Meningkatnya masyarakat yang berpendidikan",
      indikator: ["Indeks Pembangunan Manusia, 74, 53"],
      target: ["74.53"],
    },
    {
      sasaran:
        "Meningkatnya kualitas penanganan kesejahteraan dan kemandirian masyarakat",
      indikator: ["Angka Kemiskinan, 6,25%"],
      target: ["6,25%"],
    },
    {
      sasaran:
        "Meningkatnya penanganan pengangguran TPT (Tingkat Pengangguran Terbuka)",
      indikator: ["Pengangguran Terbuka, 8,81"],
      target: ["8,81%"],
    },
    {
      sasaran: "Berkurangnya kesenjangan pendapatan penduduk",
      indikator: ["Indeks Gini ratio"],
      target: ["0.332"],
    },
    {
      sasaran: "Meningkatnya konektivitas antar wilayah",
      indikator: ["Indeks konektivitas 7,5"],
      target: ["7,5"],
    },
    {
      sasaran: "Meningkatnya capaian infrastruktur dasar",
      indikator: ["Persentase Cakupaan Universal Akses 88,67"],
      target: ["88,67"],
    },
    {
      sasaran: "Meningkatnya kualitas lingkungan hidup",
      indikator: ["IKLH(Indeks Kualitas Lingkungan Hidup)"],
      target: ["63,65"],
    },
    {
      sasaran: "Meningkatnya pengurangan risiko bencana",
      indikator: ["Indeks Resiko Bencana"],
      target: [""],
    },
    {
      sasaran: "Meningkatnya Birokrasi yang bersih dan akuntabel",
      indikator: [
        "Indeks Reformasi Birokrasi (IRB)",
        "Nilai SAKIP",
        "Indeks SPBE",
      ],
      target: ["66,19", "70", "100%"],
    },
    {
      sasaran: "Meningkatnya Kualitas Inovasi daerah",
      indikator: ["Indeks Inovasi Daerah"],
      target: ["43"],
    },
  ];
  return (
    <div className="py-20 max-w-6xl mx-auto">
      <div className="mb-3">
        <h1 className="text-3xl font-serif font-semibold text-cyan-400">
          Indikator Kinerja Utama{" "}
        </h1>
        <h3 className="text-xl font-semibold text-slate-500">
          Pemerintah Kabupaten Bintan
        </h3>
      </div>

      {/*table*/}
      <table className="table-auto text-neutral-700">
        <thead className="bg-neutral-700 text-white">
          <tr className="text-left">
            <th className="p-4">Sasaran</th>
            <th className="p-4">Indikator</th>
            <th className="p-4">Target</th>
          </tr>
        </thead>
        <tbody>
          {iku.map((item) => (
            <tr className="align-top border-b" key={item.sasaran}>
              <td className="p-4">{item.sasaran}</td>

              <td className="p-4">
                {item.indikator.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </td>

              <td className="bg-red-50 p-4 text-right">
                {item.target.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
