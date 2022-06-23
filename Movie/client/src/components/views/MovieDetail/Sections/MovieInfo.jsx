import React from 'react';

function MovieInfo(props) {
  const { info } = props;

  return (
    <>
      <table className="w-full table-fixed border-collapse">
        <tbody>
          <tr>
            <td className="border border-slate-300 px-6 py-3 font-bold bg-slate-300">Title</td>
            <td className="border border-slate-300 px-6 py-3">{info && info.original_title}</td>
            <td className="border border-slate-300 px-6 py-3 font-bold bg-slate-300">release_date</td>
            <td className="border border-slate-300 px-6 py-3">{info && info.release_date}</td>
            <td className="border border-slate-300 px-6 py-3 font-bold bg-slate-300">revenue</td>
            <td className="border border-slate-300 px-6 py-3">{info && info.revenue}</td>
          </tr>
          <tr>
            <td className="border border-slate-300 px-6 py-3 font-bold bg-slate-300">runtime</td>
            <td className="border border-slate-300 px-6 py-3">{info && info.runtime}</td>
            <td className="border border-slate-300 px-6 py-3 font-bold bg-slate-300">vote_avarage</td>
            <td className="border border-slate-300 px-6 py-3" colSpan={3}>
              {info && info.vote_average}
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 px-6 py-3 font-bold bg-slate-300">vote_count</td>
            <td className="border border-slate-300 px-6 py-3">{info && info.vote_count}</td>
            <td className="border border-slate-300 px-6 py-3 font-bold bg-slate-300">status</td>
            <td className="border border-slate-300 px-6 py-3">{info && info.status}</td>
            <td className="border border-slate-300 px-6 py-3 font-bold bg-slate-300">popularity</td>
            <td className="border border-slate-300 px-6 py-3">{info && info.popularity}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default MovieInfo;
