import Image from "next/image";
import Button from "./Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { addPlayer } from "@/app/lib/actions";

type ModalFormPropsType = {
  isOpen: boolean
  onClick: Function
}

type InputsType = {
  fideid: string
  name: string
  surname: string
  date: string
  gender: string
  country: string
  raiting: string
}

export default function ModalForm(props: ModalFormPropsType) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsType>()
  const onSubmit: SubmitHandler<InputsType> = (data) => addPlayer(data.fideid, data.name, data.surname, data.date, data.gender, data.country, data.raiting, 'a.ishqin@gmail.com')
  return (
    <div className=" flex flex-col gap-8 w-2/4 m-auto p-8 border rounded">
      <div className="flex items-center gap-4 text-xl">
        <Image src='/logo-sm.png' width='24' height='24' alt='Logo' />
        <span>|</span>
        <span>Add new player</span>
      </div>
      <form className="flex flex-col gap-4 text-sm" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4">
          <input className="w-2/4 border rounded px-4 py-2 outline-none" {...register("fideid")} placeholder='FIDE ID' />
          <input className="w-2/4 border rounded px-4 py-2 outline-none" {...register("raiting")} placeholder='Rating' />
        </div>
        <div className="flex gap-4">
          <input className="w-2/4 border rounded px-4 py-2 outline-none" {...register("name")} placeholder='Name' />
          <input className="w-2/4 border rounded px-4 py-2 outline-none" {...register("surname")} placeholder='Surname' />
        </div>
        <div className="flex gap-4">
          <input className="grow w-2/6 border rounded px-4 py-2 outline-none" {...register("date")} placeholder='Date' />
          {/* <div className="flex gap-4 w-2/6 px-4 py-2 border rounded">
            Gender:
            <div className="flex gap-4">
              <div className="flex gap-2">
                <input className="border rounded px-4 py-2 outline-none" type="radio" id="gender" name="gender" value="Male" />
                <label htmlFor="gender">M</label>
              </div>
              <div className="flex gap-2">
                <input className="border rounded px-4 py-2 outline-none" type="radio" id="gender" name="gender" value="Female" />
                <label htmlFor="gender">F</label>
              </div>
            </div>
          </div> */}
          <input className="grow w-2/6 border rounded px-4 py-2 outline-none" {...register("gender")} placeholder='Gender' />
          <input className="grow w-2/6 border rounded px-4 py-2 outline-none" {...register("country")} list="country" placeholder='Country' />
            <datalist id="country">
          <option>AUS</option>
          <option>AUT</option>
          <option>AZE</option>
          <option>ALB</option>
          <option>DZA</option>
          <option>AIA</option>
          <option>AGO</option>
          <option>AND</option>
          <option>ATA</option>
          <option>ATG</option>
          <option>ANT</option>
          <option>ARG</option>
          <option>ARM</option>
          <option>ABW</option>
          <option>AFG</option>
          <option>BHS</option>
          <option>BGD</option>
          <option>BRB</option>
          <option>BHR</option>
          <option>BLR</option>
          <option>BLZ</option>
          <option>BEL</option>
          <option>BEN</option>
          <option>BMU</option>
          <option>BVT</option>
          <option>BGR</option>
          <option>BOL</option>
          <option>BIH</option>
          <option>BWA</option>
          <option>BRA</option>
          <option>BRN</option>
          <option>BFA</option>
          <option>BDI</option>
          <option>BTN</option>
          <option>VUT</option>
          <option>VAT</option>
          <option>GBR</option>
          <option>HUN</option>
          <option>VEN</option>
          <option>VGB</option>
          <option>VIR</option>
          <option>ASM</option>
          <option>TMP</option>
          <option>VNM</option>
          <option>GAB</option>
          <option>HTI</option>
          <option>GUY</option>
          <option>GMB</option>
          <option>GHA</option>
          <option>GLP</option>
          <option>GTM</option>
          <option>GIN</option>
          <option>GNB</option>
          <option>DEU</option>
          <option>GIB</option>
          <option>HND</option>
          <option>HKG</option>
          <option>GRD</option>
          <option>GRL</option>
          <option>GRC</option>
          <option>GEO</option>
          <option>GUM</option>
          <option>DNK</option>
          <option>COD</option>
          <option>DJI</option>
          <option>DMA</option>
          <option>DOM</option>
          <option>EGY</option>
          <option>ZMB</option>
          <option>ESH</option>
          <option>ZWE</option>
          <option>ISR</option>
          <option>IND</option>
          <option>IDN</option>
          <option>JOR</option>
          <option>IRQ</option>
          <option>IRN</option>
          <option>IRL</option>
          <option>ISL</option>
          <option>ESP</option>
          <option>ITA</option>
          <option>YEM</option>
          <option>CPV</option>
          <option>KAZ</option>
          <option>CYM</option>
          <option>KHM</option>
          <option>CMR</option>
          <option>CAN</option>
          <option>QAT</option>
          <option>KEN</option>
          <option>CYP</option>
          <option>KGZ</option>
          <option>KIR</option>
          <option>CHN</option>
          <option>CCK</option>
          <option>COL</option>
          <option>COM</option>
          <option>COG</option>
          <option>CRI</option>
          <option>CIV</option>
          <option>CUB</option>
          <option>KWT</option>
          <option>COK</option>
          <option>LAO</option>
          <option>LVA</option>
          <option>LSO</option>
          <option>LBR</option>
          <option>LBN</option>
          <option>LBY</option>
          <option>LTU</option>
          <option>LIE</option>
          <option>LUX</option>
          <option>MUS</option>
          <option>MRT</option>
          <option>MDG</option>
          <option>MYT</option>
          <option>MAC</option>
          <option>MKD</option>
          <option>MWI</option>
          <option>MYS</option>
          <option>MLI</option>
          <option>MDV</option>
          <option>MLT</option>
          <option>MAR</option>
          <option>MTQ</option>
          <option>MHL</option>
          <option>MEX</option>
          <option>FSM</option>
          <option>MOZ</option>
          <option>MDA</option>
          <option>MCO</option>
          <option>MNG</option>
          <option>MSR</option>
          <option>MMR</option>
          <option>NAM</option>
          <option>NRU</option>
          <option>NPL</option>
          <option>NER</option>
          <option>NGA</option>
          <option>NLD</option>
          <option>NIC</option>
          <option>NIU</option>
          <option>NZL</option>
          <option>NCL</option>
          <option>NOR</option>
          <option>NFK</option>
          <option>ARE</option>
          <option>OMN</option>
          <option>PAK</option>
          <option>PLW</option>
          <option>PAN</option>
          <option>PNG</option>
          <option>PRY</option>
          <option>PER</option>
          <option>PCN</option>
          <option>POL</option>
          <option>PRT</option>
          <option>PRI</option>
          <option>REU</option>
          <option>CXR</option>
          <option>RUS</option>
          <option>RWA</option>
          <option>ROM</option>
          <option>SLV</option>
          <option>WSM</option>
          <option>SMR</option>
          <option>STP</option>
          <option>SAU</option>
          <option>SWZ</option>
          <option>SJM</option>
          <option>SHN</option>
          <option>PRK</option>
          <option>MNP</option>
          <option>SYC</option>
          <option>VCT</option>
          <option>SPM</option>
          <option>SEN</option>
          <option>KNA</option>
          <option>LCA</option>
          <option>SGP</option>
          <option>SYR</option>
          <option>SVK</option>
          <option>SVN</option>
          <option>USA</option>
          <option>SLB</option>
          <option>SOM</option>
          <option>SDN</option>
          <option>SUR</option>
          <option>SLE</option>
          <option>TJK</option>
          <option>THA</option>
          <option>TWN</option>
          <option>TZA</option>
          <option>TCA</option>
          <option>TGO</option>
          <option>TKL</option>
          <option>TON</option>
          <option>TTO</option>
          <option>TUV</option>
          <option>TUN</option>
          <option>TKM</option>
          <option>TUR</option>
          <option>UGA</option>
          <option>UZB</option>
          <option>UKR</option>
          <option>WLF</option>
          <option>URY</option>
          <option>FRO</option>
          <option>FJI</option>
          <option>PHL</option>
          <option>FIN</option>
          <option>FLK</option>
          <option>FRA</option>
          <option>GUF</option>
          <option>PYF</option>
          <option>HMD</option>
          <option>HRV</option>
          <option>CAF</option>
          <option>TCD</option>
          <option>CZE</option>
          <option>CHL</option>
          <option>CHE</option>
          <option>SWE</option>
          <option>LKA</option>
          <option>ECU</option>
          <option>GNQ</option>
          <option>ERI</option>
          <option>EST</option>
          <option>ETH</option>
          <option>YUG</option>
          <option>ZAF</option>
          <option>SGS</option>
          <option>KOR</option>
          <option>JAM</option>
          <option>JPN</option>
          <option>ATF</option>
          <option>IOT</option>
          <option>UMI</option>
            </datalist>
        </div>
        <div className="flex justify-end gap-6 mt-4">
          <Button type={'submit'} title={'Add player'} icon={'add'} />
          <Button type={'button'} title={'Cancel'} icon={'close'} onClick={props.onClick} />
        </div>
      </form>
    </div>
  )
}