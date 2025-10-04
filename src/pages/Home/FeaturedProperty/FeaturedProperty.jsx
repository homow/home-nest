import TopTitleSections from "@/components/common/TopTitleSections.jsx";
import PropertyCard from "@/components/common/PropertyCard.jsx";
import {Link} from "react-router-dom";

function PaginationPropertyCards() {
    return (
        <div className={"border-t border-grey-15"}>
            <div>
                <span>
                    <svg>
                        <use href="#rightArrow-icon"></use>
                    </svg>
                </span>

                <span>
                    <svg>
                        <use href="#leftArrow-icon"></use>
                    </svg>
                </span>
            </div>
            <Link to={"#"}>دیدن همه</Link>
        </div>
    )
}

export default function FeaturedProperty() {
    return (
        <section id={"featured-property"} className={"container"}>
            {/* title section */}
            <TopTitleSections title={"املاک ویژه"} text={"مجموعه‌ انتخابی از املاک ویژه‌ ما رو ببینید. هر آگهی یه نمای کلی از خونه‌ها و سرمایه‌گذاری‌های استثنایی که از طریق آشیانه در دسترس شماست رو به نمایش می‌ذاره."} link={"#"} linkText={"دیدن همه ملک‌ها"}/>

            {/* property card */}
            <div className={"mt-10 flex flex-col items-center gap-4 lg:flex-row lg:gap-5 2xl:gap-[30px]"}>
                <PropertyCard img={"https://xbeopbkmgpzwzhtijiir.supabase.co/storage/v1/object/public/static-assets/ui/home/Image-1.webp"} title={"ویلای ساحلی آرامش"} description={"یک ویلای خیره‌کننده با ۴ خواب و ۳ حمام در یک محله آرام در حومه شهر..."} features={[4, 3, "ویلایی"]} price={"550.000"} propertyLink={"#"}/>

                <PropertyCard img={"https://xbeopbkmgpzwzhtijiir.supabase.co/storage/v1/object/public/static-assets/ui/home/Image-2.webp"} title={"خانه متروپولیتن"} description={"یک آپارتمان شیک و مبله دو خوابه با منظره پانوراما از شهر..."} features={[3, 3, "ویلایی"]} price={"600.000"} propertyLink={"#"} className={"hidden lg:block"}/>

                <PropertyCard img={"https://xbeopbkmgpzwzhtijiir.supabase.co/storage/v1/object/public/static-assets/ui/home/Image.webp"} title={"کلبه روستایی دنج"} description={"یک خانه شهری زیبا با سه خوابه و دو و نیم حمام در یک مجتمع مسکونی..."} features={[2, 3, "ویلایی"]} price={"750.000"} propertyLink={"#"} className={"hidden lg:block"}/>
            </div>
        </section>
    )
}
