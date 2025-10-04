import TopTitleSections from "@/components/common/TopTitleSections.jsx";
import PropertyCard from "@/components/common/PropertyCard.jsx";

export default function FeaturedProperty() {
    return (
        <section id={"featured-property"} className={"container"}>
            <TopTitleSections title={"املاک ویژه"} text={"مجموعه‌ انتخابی از املاک ویژه‌ ما رو ببینید. هر آگهی یه نمای کلی از خونه‌ها و سرمایه‌گذاری‌های استثنایی که از طریق آشیانه در دسترس شماست رو به نمایش می‌ذاره."} link={"#"} linkText={"دیدن همه ملک‌ها"}/>

            <div className={"mt-10"}>
                <PropertyCard img={"https://xbeopbkmgpzwzhtijiir.supabase.co/storage/v1/object/public/static-assets/ui/home/Image-1.webp"} title={"ویلای ساحلی آرامش"} description={"یک ویلای خیره‌کننده با ۴ خواب و ۳ حمام در یک محله آرام در حومه شهرafsjjjjjjjjjjjjjjjjjjjjjjjl"} descriptionLink={"#"} features={[4, 3, "ویلایی"]} price={"550.000"} propertyLink={"#"}/>
                {/*<PropertyCard img={""} title={""} description={""} descriptionLink={""} features={""} price={""} link={""}/>*/}
                {/*<PropertyCard img={""} title={""} description={""} descriptionLink={""} features={""} price={""} link={""}/>*/}
                {/*<PropertyCard img={""} title={""} description={""} descriptionLink={""} features={""} price={""} link={""}/>*/}
            </div>
        </section>
    )
}
