import React from 'react';
import { Phone } from 'lucide-react';
import { emergencyServices } from '../constants/emergency';
import { theme } from '../styles/theme';

export default function EmergencyStorm() {
  return (
    <section
      style={{ backgroundColor: theme.colors.primary.black }}
      className="py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span
            style={{
              backgroundColor: theme.colors.primary.green,
              color: theme.colors.primary.gold,
              fontFamily: theme.fonts.typewriter,
            }}
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-4"
          >
            Emergency Response
          </span>

          <h2
            style={{
              fontFamily: theme.fonts.typewriter,
              color: theme.colors.secondary.lightGold,
            }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Storm Hit Last Night?{' '}
            <span style={{ color: theme.colors.primary.gold }}>
              We're Ready.
            </span>
          </h2>

          <p
            style={{ color: theme.colors.secondary.lightGold, fontFamily: theme.fonts.sans }}
            className="text-lg max-w-2xl mx-auto opacity-80"
          >
            When a fallen tree is on your roof or blocking your driveway, every
            hour matters. Ready Forest Solutions deploys rapidly across Edmonton
            and St. Albert — with the certified crew and equipment to handle
            compromised conditions safely.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {emergencyServices.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              style={{
                backgroundColor: theme.colors.secondary.gray,
                borderColor: theme.colors.primary.green,
                fontFamily: theme.fonts.sans,
              }}
              className="border rounded-xl p-6 hover:border-yellow-500 transition-colors duration-200"
            >
              <Icon
                style={{ color: theme.colors.primary.gold }}
                className="mb-4"
                size={28}
              />
              <h3
                style={{ color: theme.colors.secondary.lightGold }}
                className="font-semibold text-base mb-2"
              >
                {title}
              </h3>
              <p
                style={{ color: theme.colors.secondary.lightGold }}
                className="text-sm leading-relaxed opacity-70"
              >
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div
          style={{
            backgroundColor: theme.colors.secondary.gray,
            borderColor: theme.colors.primary.green,
          }}
          className="border rounded-xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p
              style={{
                color: theme.colors.secondary.lightGold,
                fontFamily: theme.fonts.typewriter,
              }}
              className="font-semibold text-lg mb-1"
            >
              Available 7 Days a Week
            </p>
            <p
              style={{ color: theme.colors.secondary.lightGold, fontFamily: theme.fonts.sans }}
              className="text-sm opacity-70"
            >
              Every emergency job starts with a rapid hazard assessment —
              nothing is rushed at the expense of your safety.
            </p>
          </div>

          
            href="tel:+16729680643"
            style={{
              backgroundColor: theme.colors.primary.green,
              color: theme.colors.primary.gold,
              fontFamily: theme.fonts.typewriter,
            }}
            className="hover:opacity-90 font-bold px-8 py-3 rounded-lg whitespace-nowrap transition-opacity duration-200 flex items-center gap-2"
          >
            <Phone size={16} />
            Call for Priority Response →
          </a>
        </div>

      </div>
    </section>
  );
}
