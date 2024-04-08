const TransactionsHistory = ({ items }) => {
	return (
		<table
			className="mx-auto bg-slate-100 border-collapse rounded-sm mb-20"
			style={{ width: '600px' }}
		>
			<thead className="bg-teal-500 border-2 border-teal-500">
				<tr>
					<th className="h-16 border-b-2 border-slate-400 ">Type</th>
					<th className="h-16 border-l-2 border-slate-400 border-b-2 ">
						Amount
					</th>
					<th className="h-16 border-l-2 border-slate-400 border-b-2 ">
						Currency
					</th>
				</tr>
			</thead>
			<tbody className="divide-y divide-gray-200">
				{items.map(({ id, amount, type, currency }) => {
					return (
						<tr className="capitalize text-center " key={id} id={id}>
							<td className="border-l-2 border-slate-400 border-b-2 py-4">
								{type}
							</td>
							<td className="border-l-2 border-slate-400 border-b-2 py-4">
								{amount}
							</td>
							<td className="border-l-2 border-slate-400 border-b-2 py-4">
								{currency}
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default TransactionsHistory;
