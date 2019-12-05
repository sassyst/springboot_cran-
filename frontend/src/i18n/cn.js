import chineseMessages from 'ra-language-chinese';

export default {
    ...chineseMessages,
    pos: {
        search: '搜索',
        configuration: '设置',
        language: '语言',
        theme: {
            name: '主题',
            light: '亮',
            dark: '暗',
        },
        dashboard: {
            Network_state: '实例',
            monthly_revenue: '月收入',
            new_orders: '新订单',
            pending_reviews: '在线评论',
            new_customers: '可用网络实例',
            pending_orders: '在线订单',
            order: {
                items:
                    'by %{customer_name}, one item |||| by %{customer_name}, %{nb_items} items',
            },
            map: {
                start_button: '开始仿真',
                end_button: '停止仿真',
                pause_button: '暂停仿真',
                running_button: '正在仿真',
                continue_button: '继续仿真',
            },
        },
        menu: {
            network: '网络设备管理',
            params: '场景参数管理',
            // optimization: '网络优化',
            // results: '仿真结果记录',
            current_network: '当前网络部署情况',
            current_link: '当前网络链路情况',
            current_params: '当前仿真场景参数',
            dashboard: "首页"

        },
    },
    resources: {
        network: {
            name: '网络实例管理',
            fields: {
                network_id: '编号',
                BbuPoolNum: 'Bbu池数量',
                BbuNum: 'Bbu数量',
                RruNum: 'Rru数量',
                MecServerNum: 'MEC云端服务器数量',
                des: "备注",
                UeNum: 'Ue数量',
                create_by: "创建者",
                create_date: "创建时间",
                last_edit: "上次编辑"
            },
            tabs: {
                BbuPool: 'Bbu池详情',
                Bbu: 'Bbu详情',
                Rru: 'Rru详情',
                MecServe: 'MEC云端服务器详情',
                Ue: 'Ue详情',
            },
            page: {
                delete: '删除网络实例',
            },
        },
        bbus: {
            name: 'BBU（基带处理单元）',
            title: 'BBU %{reference}',
            fields: {
                basket: {
                    delivery: 'Delivery',
                    reference: 'Reference',
                    quantity: 'Quantity',
                    sum: 'Sum',
                    tax_rate: 'Tax Rate',
                    total: 'Total',
                    unit_price: 'Unit Price',
                },
                bbu_id: 'BBU编号',
                bbupool_id: '所属基带池',
                customer_id: 'Customer',
                date_gte: 'Passed Since',
                date_lte: 'Passed Before',
                total_gte: 'Min amount',
                status: 'Status',
                returned: 'Returned',
            },
        },
        ues: {
            name: 'Ue（终端设备）',
            title: 'BBU %{reference}',
            fields: {
                id: '用户Id',
                // ueType: '表示室内还是室外',
                lat: '经度',
                lng: '纬度',
                Z: '用户的绝对位置',
                ServiceRruId: '从属RRu编号',
                RbNum: 'RB数目',
                UeTransPower: '发射功率',
                UeAntennaId: '终端的发射天线',
                // IsActivity: '表示用户是否处于活跃状态',
                UeGroupId: 'Ue组',
                ModelType: '用户选择的模型',
                SNR: 'SNR',
                TotalBit: '传输bit数',
                TTISent: '发送的TTI起始时刻',
                AverageRate: '数据速率的平均值',
                BbuId: '所属BBuId',
                TotalRb: '定义已分配的Rb数量',
                Priority: '优先级',
                Dis: '与基站距离',
                // WorkType: '区分既定业务量和非既定业务量'
                network_id: '网络实例Id',
            },
        },
        bbupools: {
            name: "BBUPool(基带池)"
        },
        mecservers: {
            name: "MEC云端服务器"
        },
        links: {
            name: "链路"
        },

        products: {
            name: 'Poster |||| Posters',
            fields: {
                category_id: 'Category',
                height_gte: 'Min height',
                height_lte: 'Max height',
                height: 'Height',
                image: 'Image',
                price: 'Price',
                reference: 'Reference',
                stock_lte: 'Low Stock',
                stock: 'Stock',
                thumbnail: 'Thumbnail',
                width_gte: 'Min width',
                width_lte: 'Max width',
                width: 'Width',
            },
            tabs: {
                image: 'Image',
                details: 'Details',
                description: 'Description',
                reviews: 'Reviews',
            },
        },
        categories: {
            name: 'Category |||| Categories',
            fields: {
                products: 'Products',
            },
        },
        reviews: {
            name: 'Review |||| Reviews',
            detail: 'Review detail',
            fields: {
                customer_id: 'Customer',
                command_id: 'Order',
                product_id: 'Product',
                date_gte: 'Posted since',
                date_lte: 'Posted before',
                date: 'Date',
                comment: 'Comment',
                rating: 'Rating',
            },
            action: {
                accept: 'Accept',
                reject: 'Reject',
            },
            notification: {
                approved_success: 'Review approved',
                approved_error: 'Error: Review not approved',
                rejected_success: 'Review rejected',
                rejected_error: 'Error: Review not rejected',
            },
        },
        segments: {
            name: 'Segments',
            fields: {
                customers: 'Customers',
                name: 'Name',
            },
            data: {
                compulsive: 'Compulsive',
                collector: 'Collector',
                ordered_once: 'Ordered once',
                regular: 'Regular',
                returns: 'Returns',
                reviewer: 'Reviewer',
            },
        },
    },
};
