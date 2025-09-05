import { useState } from "react";
import ArrowDownIcon from "../../../public/icons/ArrowDown";

const ContactPointForm = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <div className="mb-8">
      <h2 className="text-lg font-medium mb-5">
        Point of Origin & Destination
      </h2>

      <div className="flex gap-2">
        <div className="w-full">
          <label className="block text-sm font-semibold text-black">
            Origin
          </label>

          <div className="mt-[10px] relative">
            <select
              name="role"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="appearance-none block w-full border border-lightGray rounded-sm p-3 pr-10 text-sm"
              required
            >
              <option value="">Select Origin</option>
              <option value="Frontend Developer">IT Department</option>
              <option value="Backend Developer">Purchasing Department</option>
              <option value="Full Stack Developer">
                Human Resource Department
              </option>
              <option value="Designer">Engineering Department</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-lightGray">
              <ArrowDownIcon />
            </div>
          </div>
        </div>

        <div className="flex items-end pb-2">
          <span className="text-base font-medium">to</span>
        </div>

        <div className="w-full">
          <label className="block text-sm font-semibold text-black">
            Destination
          </label>

          <div className="mt-[10px] relative">
            <select
              name="role"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="appearance-none block w-full border border-lightGray rounded-sm p-3 pr-10 text-sm"
              required
            >
              <option value="">Select Destination</option>
              <option value="Frontend Developer">IT Department</option>
              <option value="Backend Developer">Purchasing Department</option>
              <option value="Full Stack Developer">
                Human Resource Department
              </option>
              <option value="Designer">Engineering Department</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-lightGray">
              <ArrowDownIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPointForm;
