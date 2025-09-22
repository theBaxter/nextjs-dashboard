import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { LatestInvoice } from '@/app/lib/definitions';

export default async function LatestInvoices({
  latestInvoices,
}: {
  latestInvoices: LatestInvoice[];
}) {
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl text-gray-900 dark:text-gray-100`}>
        Latest Invoices
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 dark:bg-gray-800 p-4">
        {/* NOTE: Uncomment this code in Chapter 7 */}
        <div className="bg-white dark:bg-gray-700 px-6">
          {latestInvoices.map((invoice, i) => {
            return (
              <div
                key={invoice.id}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t border-gray-200 dark:border-gray-600': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <Image
                    src={invoice.image_url}
                    alt={`${invoice.name}'s profile picture`}
                    className="mr-4 rounded-full"
                    width={32}
                    height={32}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base text-gray-900 dark:text-gray-100">
                      {invoice.name}
                    </p>
                    <p className="hidden text-sm text-gray-500 dark:text-gray-400 sm:block">
                      {invoice.email}
                    </p>
                  </div>
                </div>
                <p
                  className={`${lusitana.className} truncate text-sm font-medium md:text-base text-gray-900 dark:text-gray-100`}
                >
                  {invoice.amount}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          <h3 className="ml-2 text-sm text-gray-500 dark:text-gray-400">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
